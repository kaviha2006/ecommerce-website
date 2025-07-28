import React, { useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

export default function OrderConfirmedPage() {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const orderPlacedRef = useRef(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token || orderPlacedRef.current || cartItems.length === 0) return;

    orderPlacedRef.current = true;
    console.log("📦 Placing order...");

    fetch('http://localhost:5000/api/orders/place', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({
        items: cartItems.map(item => ({
          _id: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image // ✅ Important for image display in Orders
        })),
        total: totalPrice
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("✅ Order Response:", data);
        if (data.success) {
          clearCart();
          console.log("🧹 Cart cleared");
        }
      })
      .catch(err => {
        console.error('❌ Order Error:', err);
      });
  }, []); // Only once on mount

  const handleContinueShopping = () => {
    navigate('/home');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center p-4 rounded shadow" style={{ background: 'white', maxWidth: '400px' }}>
        <img
          src="https://t4.ftcdn.net/jpg/12/19/98/57/360_F_1219985739_vVWm1tDs4DHVgr6SX6UmCBCldMcTlnxQ.jpg"
          alt="Order Confirmed"
          className="img-fluid mb-4"
        />
        <h2 className="mb-3">Order Confirmed</h2>
        <p className="mb-4">Your order has been placed successfully!</p>
        <button className="btn btn-primary" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
