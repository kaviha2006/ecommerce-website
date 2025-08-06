import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth'); // Go to register/login choice page
    } else {
      navigate('/order-confirmed'); // Go to confirmation
    }
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {/* Replace this with your cart items mapping */}
      <div>
        {/* Example item */}
        <div className="card p-3 mb-2">Wireless Headphones - ₹113</div>
      </div>

      {/* ✅ Checkout Button */}
      <div className="text-end">
        <button className="btn btn-primary mt-3" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
