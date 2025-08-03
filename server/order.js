import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// 🧾 Order Schema
const orderSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      productId: String,
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  total: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

// ⚙️ Model with explicit collection name
const Order = mongoose.model('Order', orderSchema, 'orders');

// 🔐 JWT Middleware
function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// ✅ Place an order
router.post('/place', authenticateToken, async (req, res) => {
  const { items, total } = req.body;

  if (!items || !total || items.length === 0) {
    return res.status(400).json({ success: false, message: 'Invalid order data' });
  }

  try {
    const order = new Order({
      userId: req.user.id,
      items,
      total
    });

    await order.save();
    res.json({ success: true, message: 'Order placed successfully' });
  } catch (err) {
    console.error('❌ Error saving order:', err);
    res.status(500).json({ success: false, message: 'Failed to save order' });
  }
});

// ✅ Get user's orders
router.get('/my', authenticateToken, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).sort({ date: -1 });
    res.json({ success: true, orders });
  } catch (err) {
    console.error('❌ Error fetching orders:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch orders' });
  }
});

// ✅ Delete specific order
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const deleted = await Order.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.json({ success: true, message: 'Order deleted' });
  } catch (err) {
    console.error('❌ Error deleting order:', err);
    res.status(500).json({ success: false, message: 'Failed to delete order' });
  }
});

export default router;
