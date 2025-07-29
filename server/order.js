const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = 'your_jwt_secret'; // Use env variable in production

// 🧾 Order schema and model
const orderSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  total: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('orders', orderSchema);

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

// ✅ Place an order → POST /api/orders/place
router.post('/place', authenticateToken, async (req, res) => {
  const { items, total } = req.body;

  try {
    const order = new Order({
      userId: req.user.id,
      items,
      total
    });

    await order.save();
    res.json({ success: true, message: 'Order saved successfully' });
  } catch (err) {
    console.error('❌ Error saving order:', err);
    res.status(500).json({ success: false, message: 'Failed to save order' });
  }
});

// ✅ Fetch user orders → GET /api/orders/my
router.get('/my', authenticateToken, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).sort({ date: -1 });
    res.json({ success: true, orders });
  } catch (err) {
    console.error('❌ Error fetching orders:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch orders' });
  }
});

// ✅ Delete a specific order → DELETE /api/orders/:id
router.delete('/:id', authenticateToken, async (req, res) => {
  const orderId = req.params.id;

  try {
    const deleted = await Order.findOneAndDelete({
      _id: orderId,
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

module.exports = router;
