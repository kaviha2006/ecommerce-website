import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './auth.js';
import orderRoutes from './order.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB error:", err));

app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

import mongoosePkg from 'mongoose';
const { Schema, model } = mongoosePkg;

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
  rating: Number,
  category: String
});

const Product = model('ecommerce', productSchema);

app.get('/products', async (req, res) => {
  const { category } = req.query;
  try {
    const products = category
      ? await Product.find({ category })
      : await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching products' });
  }
});

app.get('/products/category/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const products = await Product.find({ category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch category products' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
