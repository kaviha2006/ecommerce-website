import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth');
      return;
    }

   fetch('https://ecommerce-backend-6p3c.onrender.com/api/orders/my', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setOrders(data.orders);
        } else {
          console.error('Failed to fetch orders');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching orders:', err);
        setLoading(false);
      });
  }, [navigate]);

  const handleDeleteOrder = (orderId) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    fetch(`http://localhost:5000/api/orders/${orderId}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setOrders(prev => prev.filter(order => order._id !== orderId));
        } else {
          alert('Failed to delete order');
        }
      })
      .catch(err => {
        console.error('Error deleting order:', err);
      });
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#fef9f4' }}>
      {/* ✅ Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">Azyra</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                  Category
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/category/Electronics">Electronics</Link></li>
                  <li><Link className="dropdown-item" to="/category/Clothing">For Women</Link></li>
                  <li><Link className="dropdown-item" to="/category/Home">For Men</Link></li>
                  <li><Link className="dropdown-item" to="/category/Footwear">Footwear</Link></li>
                  <li><Link className="dropdown-item" to="/category/Home Decor">Home</Link></li>
                  <li><Link className="dropdown-item" to="/category/Stationary">Stationary</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle active text-decoration-underline" to="#" role="button" data-bs-toggle="dropdown">
                  Profile
                </Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/profile-info">Profile Info</Link></li>
                  <li><Link className="dropdown-item active" to="/orders">Orders</Link></li>
                  <li><Link className="dropdown-item" to="/about-project">About Project</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={() => {
                      localStorage.removeItem('token');
                      navigate('/home');
                    }}>Sign Out</button>
                  </li>
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ Orders */}
      <div className="container mt-5 pt-5">
        <h2 className="text-center mb-4 fw-bold">My Orders</h2>

        {loading ? (
          <div className="text-center">Loading orders...</div>
        ) : orders.length === 0 ? (
          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No Orders"
              style={{ maxHeight: '200px' }}
              className="mb-3"
            />
            <p className="text-muted">You haven't placed any orders yet.</p>
          </div>
        ) : (
          orders.map((order, index) => (
            <div key={order._id} className="card mb-4 shadow-sm">
              <div className="card-header d-flex justify-content-between align-items-center bg-light">
                <strong>Order #{index + 1}</strong>
                <div>
                  <span className="me-3">{new Date(order.date).toLocaleString()}</span>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDeleteOrder(order._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {order.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <strong>{item.name}</strong> (x{item.quantity})
                      </div>
                      <span className="fw-semibold">₹{item.price * item.quantity}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 text-end">
                  <strong>Total: ₹{order.total.toFixed(2)}</strong>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ✅ Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        &copy; 2025 Azyra. All rights reserved.
      </footer>
    </div>
  );
}
