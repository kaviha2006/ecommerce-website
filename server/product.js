// 📄 server/product.js
import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// 🧱 Define Mongoose Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  description: String,
  imageUrl: String,
  rating: Number,
  category: String
});

// 🏷️ Model bound to 'ecommerces' collection
const Product = mongoose.model('Product', productSchema, 'ecommerce');

// 🛒 GET all products
router.get('/products', async (req, res) => {
  try {
    const { category } = req.query;
    const products = category
      ? await Product.find({ category })
      : await Product.find();
    console.log('📦 Products found:', products); // Debug
    res.json(products);
  } catch (err) {
    console.error('❌ Error fetching products:', err.message);
    res.status(500).json({ error: 'Error fetching products' });
  }
});

router.get('/products/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ category });
    res.json(products);
  } catch (err) {
    console.error('❌ Failed to fetch category products:', err);
    res.status(500).json({ error: 'Failed to fetch category products' });
  }
});

export default router;