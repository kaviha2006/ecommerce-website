import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  description: String,
  imageUrl: String,
  rating: Number,
  category: String
});

const Product = mongoose.model('Product', productSchema, 'ecommerce');

router.get('/', async (req, res) => {
  try {
    const { category, categories } = req.query;
    if (categories === 'true') {
      const uniqueCategories = await Product.distinct('category');
      console.log('📋 Categories found:', uniqueCategories);
      return res.json(uniqueCategories);
    }
    const products = category
      ? await Product.find({ category })
      : await Product.find();
    console.log('📦 Products found:', products);
    res.json(products);
  } catch (err) {
    console.error('❌ Error fetching products:', err.message);
    res.status(500).json({ error: 'Error fetching products' });
  }
});

router.get('/category/:category', async (req, res) => {
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