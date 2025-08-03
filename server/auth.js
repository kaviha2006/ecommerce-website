// auth.js (ESM version)

import mongoose from 'mongoose';
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from './User.js';
import dotenv from 'dotenv';

dotenv.config(); // ✅ Loads environment variables from .env

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_jwt_secret'; // 🔐 Now uses .env

// 🔐 Register new user
router.post('/register', async (req, res) => {
  const { name, email, password, phone, address1, address2, city, state, zip } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ success: false, message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address1,
      address2,
      city,
      state,
      zip
    });

    await newUser.save();
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error('❌ Error registering user:', err);
    res.status(500).json({ success: false, message: 'Registration failed' });
  }
});

// 🔑 Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ success: false, message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ success: false, message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      token,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address1: user.address1,
        address2: user.address2,
        city: user.city,
        state: user.state,
        zip: user.zip
      }
    });
  } catch (err) {
    console.error('❌ Error logging in:', err);
    res.status(500).json({ success: false, message: 'Login failed' });
  }
});

export default router;
