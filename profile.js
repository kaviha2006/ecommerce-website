// routes/profile.js
import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();
const router = express.Router();

// ✅ Auth Middleware (Verifies JWT token)
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization header missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    console.error('🔐 Token verification failed:', err.message);
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

// ✅ GET /api/profile - Protected route to get user profile
router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error('⚠️ Error fetching user profile:', err.message);
    res.status(500).json({ error: 'Server error fetching profile' });
  }
});

export default router;
