// api/cart/index.js
import { connectDB } from '../../lib/mongodb';
import { User } from '../../models/User';
import { Product } from '../../models/Product';
import { verifyToken } from '../../lib/auth';

export default async function handler(req, res) {
  try {
    await connectDB();
    
    // Verify authentication
    const user = await verifyToken(req);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    switch (req.method) {
      case 'GET':
        return await getCart(req, res, user);
      case 'POST':
        return await addToCart(req, res, user);
      case 'PUT':
        return await updateCartItem(req, res, user);
      case 'DELETE':
        return await removeFromCart(req, res, user);
      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Cart API error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Get user's cart
async function getCart(req, res, user) {
  try {
    const userWithCart = await User.findById(user.userId)
      .populate('cart.product', 'name price images category inStock')
      .select('cart');

    if (!userWithCart) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Calculate totals
    const cartItems = userWithCart.cart.map(item => ({
      id: item._id,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      color: item.color,
      subtotal: item.product.price * item.quantity
    }));

    const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    res.status(200).json({
      items: cartItems,
      total: total,
      itemCount: itemCount
    });
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ message: 'Failed to fetch cart' });
  }
}

// Add item to cart
async function addToCart(req, res, user) {
  try {
    const { productId, quantity = 1, size, color } = req.body;

    if (!productId) {
      return res.status(400).json({ message: 'Product ID is required' });
    }

    // Verify product exists and is in stock
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (!product.inStock || product.stock < quantity) {
      return res.status(400).json({ message: 'Product is out of stock' });
    }

    // Find user and check if item already exists in cart
    const userData = await User.findById(user.userId);
    const existingItemIndex = userData.cart.findIndex(item => 
      item.product.toString() === productId &&
      item.size === size &&
      item.color === color
    );

    if (existingItemIndex > -1) {
      // Update existing item quantity
      userData.cart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item to cart
      userData.cart.push({
        product: productId,
        quantity,
        size,
        color,
        addedAt: new Date()
      });
    }

    await userData.save();

    // Return updated cart
    const updatedUser = await User.findById(user.userId)
      .populate('cart.product', 'name price images category inStock')
      .select('cart');

    const cartItems = updatedUser.cart.map(item => ({
      id: item._id,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      color: item.color,
      subtotal: item.product.price * item.quantity
    }));

    const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    res.status(200).json({
      message: 'Item added to cart',
      items: cartItems,
      total: total,
      itemCount: itemCount
    });

  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({ message: 'Failed to add item to cart' });
  }
}

// Update cart item quantity
async function updateCartItem(req, res, user) {
  try {
    const { itemId, quantity } = req.body;

    if (!itemId || quantity < 0) {
      return res.status(400).json({ message: 'Invalid item ID or quantity' });
    }

    const userData = await User.findById(user.userId);
    const cartItem = userData.cart.id(itemId);

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    if (quantity === 0) {
      // Remove item if quantity is 0
      userData.cart.pull(itemId);
    } else {
      // Update quantity
      cartItem.quantity = quantity;
    }

    await userData.save();

    // Return updated cart
    const updatedUser = await User.findById(user.userId)
      .populate('cart.product', 'name price images category inStock')
      .select('cart');

    const cartItems = updatedUser.cart.map(item => ({
      id: item._id,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      color: item.color,
      subtotal: item.product.price * item.quantity
    }));

    const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    res.status(200).json({
      message: 'Cart updated',
      items: cartItems,
      total: total,
      itemCount: itemCount
    });

  } catch (error) {
    console.error('Update cart error:', error);
    res.status(500).json({ message: 'Failed to update cart' });
  }
}

// Remove item from cart
async function removeFromCart(req, res, user) {
  try {
    const { itemId } = req.body;

    if (!itemId) {
      return res.status(400).json({ message: 'Item ID is required' });
    }

    const userData = await User.findById(user.userId);
    userData.cart.pull(itemId);
    await userData.save();

    // Return updated cart
    const updatedUser = await User.findById(user.userId)
      .populate('cart.product', 'name price images category inStock')
      .select('cart');

    const cartItems = updatedUser.cart.map(item => ({
      id: item._id,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      color: item.color,
      subtotal: item.product.price * item.quantity
    }));

    const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    res.status(200).json({
      message: 'Item removed from cart',
      items: cartItems,
      total: total,
      itemCount: itemCount
    });

  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ message: 'Failed to remove item from cart' });
  }
}