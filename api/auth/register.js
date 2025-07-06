// api/auth/register.js
/* eslint-env node */
import { connectDB } from '../../lib/mongodb.js';
import { User } from '../../models/User.js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { sendVerificationEmail } from '../../lib/emailService.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectDB();
    
    const { name, email, password, confirmPassword } = req.body;

    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
    console.log("confirm password", confirmPassword);

    // Validate input
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);


    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      isVerified: false,
      cart: [],
      wishlist: []
    });

    res.status(201).json({
      message: 'User registered successfully.',
      userId: user._id
    });

  } catch (error) {
    console.error('Registration error:', error);
    
    if (error.code === 11000) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }
    
    res.status(500).json({ message: 'Internal server error' });
  }
}