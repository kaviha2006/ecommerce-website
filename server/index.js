// 📦 Imports
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// 🌐 Route files
import authRoutes from './auth.js';
import orderRoutes from './order.js';

// ✅ Load env variables
dotenv.config();

// ⚙️ App setup
const app = express();
const PORT = process.env.PORT || 5000;

// 🔧 Middlewares
app.use(cors());
app.use(express.json());

// 🧠 MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// 🔗 API Routes
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

// 📦 Product Schema & Model (can be moved to a separate file if needed)
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
  rating: Number,
  category: String
});

const Product = mongoose.model('ecommerce', productSchema); // Make sure this matches your DB collection

// 📦 Product Routes

// Get all products or by category
app.get('/products', async (req, res) => {
  const { category } = req.query;
  try {
    const products = category
      ? await Product.find({ category })
      : await Product.find();
    res.json(products);
  } catch (err) {
    console.error('❌ Error fetching products:', err);
    res.status(500).json({ error: 'Error fetching products' });
  }
});

// Get products by category (alternative route)
app.get('/products/category/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const products = await Product.find({ category });
    res.json(products);
  } catch (err) {
    console.error('❌ Failed to fetch category products:', err);
    res.status(500).json({ error: 'Failed to fetch category products' });
  }
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
