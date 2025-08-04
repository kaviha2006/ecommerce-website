// 📦 Imports
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// 🌐 Route files
import authRoutes from './auth.js';
import orderRoutes from './order.js';
import productRoutes from './product.js';
import profileRoutes from './routes/profile.js';

const app = express();
const PORT = process.env.PORT || 5000;

// 🔧 Middlewares
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-frontend.onrender.com'], // ✅ Replace with your actual Render frontend URL
  credentials: true
}));
app.use(express.json());

// 🧠 MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 🔗 API Routes
app.use('/api/auth', authRoutes);         // Auth (Register/Login)
app.use('/api/orders', orderRoutes);      // Orders
app.use('/api/products', productRoutes);  // Products
app.use('/api/profile', profileRoutes);   // Profile Info

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
