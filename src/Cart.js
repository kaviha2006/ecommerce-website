import React, { useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfileDropdown.css';
import { CartContext } from './CartContext';

export default function Cart() {
  const { cartItems, updateQuantity, totalPrice, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // ✅ Handle Checkout based on login status
  const handleCheckout = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth', { state: { fromCheckout: true } });
    } else {
      navigate('/order-confirmed');
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* ✅ Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold">Azyra</Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2">
              <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active text-decoration-underline fw-bold' : 'nav-link'}>Home</NavLink>
            </li>

            <li className="nav-item dropdown px-2">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Category</span>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/category/electronics">Electronics</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/women">For Women</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/men">For Men</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/footwear">Footwear</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/home">Home Essentials</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/stationary">Stationary</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown px-2">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</span>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/profile-info">Profile Info</NavLink></li>
                <li><NavLink className="dropdown-item" to="/orders">Orders</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'dropdown-item fw-bold text-decoration-underline' : 'dropdown-item'} to="/about-project">About Project</NavLink></li>
              </ul>
            </li>

            <li className="nav-item px-2">
              <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav-link fw-bold text-decoration-underline' : 'nav-link'}>Cart</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* ✅ Cart Content */}
      <div className="container pt-5 mt-5">
        <h2 className="mb-4">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <img
              src="https://img.freepik.com/premium-vector/empty-cart_701961-7086.jpg"
              alt="Empty Cart"
              className="img-fluid"
              style={{ maxHeight: '300px' }}
            />
            <div className="mt-3">
              <Link to="/home" className="btn btn-primary">Continue Shopping</Link>
            </div>
          </div>
        ) : (
          <>
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Image</th>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item._id}>
                    <td><img src={item.imageUrl} width="70" alt={item.name} /></td>
                    <td>{item.name}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                        className="form-control form-control-sm w-50"
                      />
                    </td>
                    <td>₹{item.price}</td>
                    <td>
                      ₹{item.quantity > 0 ? (item.price * item.quantity).toFixed(2) : '0.00'}
                      <br />
                      <button
                        className="btn btn-sm btn-danger mt-2"
                        onClick={() => removeFromCart(item._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ✅ Total + Proceed to Checkout */}
            <h4 className="text-end">Total: ₹{totalPrice.toFixed(2)}</h4>
            <div className="text-end">
              <button className="btn btn-success" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* ✅ Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        &copy; 2025 Azyra. All rights reserved.
      </footer>
    </div>
  );
}
