import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './models/User.js'; // Ensure this path matches your project structure
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// 🔒 Auth Middleware
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Authorization denied' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

// ✅ Register Route
router.post('/register', async (req, res) => {
  const { name, email, password, phone, address1, address2, city, state, zip } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ success: false, message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, phone, address1, address2, city, state, zip });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({
      success: true,
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token
    });
  } catch (err) {
    console.error('❌ Register error:', err.message, err.stack);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ✅ Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({
      success: true,
      _id: user._id,
      name: user.name,
      email: user.email,
      token
    });
  } catch (err) {
    console.error('❌ Login error:', err.message, err.stack);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ✅ Get Profile Info
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error('❌ Profile error:', err.message, err.stack);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;