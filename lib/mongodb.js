/* eslint-env node */
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('✅ MongoDB connected successfully');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// lib/auth.js
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

export async function verifyToken(req) {
  try {
    let token = null;
    
    // Check for token in cookies first
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }
    // Fallback to Authorization header
    else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      token = req.headers.authorization.substring(7);
    }

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Verify user still exists
    const user = await User.findById(decoded.userId).select('-password');
    if (!user || !user.isVerified) {
      return null;
    }

    return { userId: decoded.userId, email: decoded.email };
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}

export function generateToken(userId, email) {
  return jwt.sign(
    { userId, email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}

// lib/emailService.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function sendVerificationEmail(email, token) {
  const verificationUrl = `${process.env.NEXTAUTH_URL}/verify-email?token=${token}`;
  
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Verify Your Email - Velour Furniture',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; padding: 20px 0;">
          <h1 style="color: #029fae; font-size: 2em; margin-bottom: 0;">VELOUR</h1>
          <p style="color: #636270; margin-top: 0;">Premium Furniture Store</p>
        </div>
        
        <div style="background: #f9f9f9; padding: 30px; border-radius: 10px; margin: 20px 0;">
          <h2 style="color: #272343; margin-bottom: 20px;">Verify Your Email Address</h2>
          <p style="color: #636270; line-height: 1.6; margin-bottom: 25px;">
            Thank you for registering with Velour! To complete your registration and start shopping, 
            please verify your email address by clicking the button below.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" 
               style="background: #029fae; color: white; padding: 15px 30px; text-decoration: none; 
                      border-radius: 5px; font-weight: bold; display: inline-block;">
              Verify Email Address
            </a>
          </div>
          
          <p style="color: #636270; font-size: 14px; margin-top: 25px;">
            If you didn't create an account with us, please ignore this email.
          </p>
          
          <p style="color: #636270; font-size: 14px;">
            This link will expire in 24 hours for security reasons.
          </p>
        </div>
        
        <div style="text-align: center; padding: 20px 0; color: #636270; font-size: 12px;">
          <p>© 2024 Velour Furniture. All rights reserved.</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Verification email sent successfully');
  } catch (error) {
    console.error('❌ Error sending verification email:', error);
    throw error;
  }
}

export async function sendPasswordResetEmail(email, token) {
  const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`;
  
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Reset Your Password - Velour Furniture',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; padding: 20px 0;">
          <h1 style="color: #029fae; font-size: 2em; margin-bottom: 0;">VELOUR</h1>
          <p style="color: #636270; margin-top: 0;">Premium Furniture Store</p>
        </div>
        
        <div style="background: #f9f9f9; padding: 30px; border-radius: 10px; margin: 20px 0;">
          <h2 style="color: #272343; margin-bottom: 20px;">Reset Your Password</h2>
          <p style="color: #636270; line-height: 1.6; margin-bottom: 25px;">
            We received a request to reset your password. Click the button below to create a new password.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" 
               style="background: #029fae; color: white; padding: 15px 30px; text-decoration: none; 
                      border-radius: 5px; font-weight: bold; display: inline-block;">
              Reset Password
            </a>
          </div>
          
          <p style="color: #636270; font-size: 14px; margin-top: 25px;">
            If you didn't request this, please ignore this email.
          </p>
          
          <p style="color: #636270; font-size: 14px;">
            This link will expire in 1 hour for security reasons.
          </p>
        </div>
        
        <div style="text-align: center; padding: 20px 0; color: #636270; font-size: 12px;">
          <p>© 2024 Velour Furniture. All rights reserved.</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Password reset email sent successfully');
  } catch (error) {
    console.error('❌ Error sending password reset email:', error);
    throw error;
  }
}