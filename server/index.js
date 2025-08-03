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

const app = express();
const PORT = process.env.PORT || 5000;

// 🔧 Middlewares
app.use(cors());
app.use(express.json());

// 🧠 MongoDB Connection
console.log('MONGO_URI:', process.env.MONGO_URI); // Debug line
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 🔗 API Routes
app.use('/api', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});