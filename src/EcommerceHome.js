// client/src/EcommerceHome.js
import React, { useState, useContext, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import './Home.css';
import './ProfileDropdown.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './CartContext';

export default function EcommerceHome() {
  const [sortBy, setSortBy] = useState('');
  const [search, setSearch] = useState('');
  const { cartItems } = useContext(CartContext);

  // Count total quantity of items
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      {/* Header Section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold">
            Azyra
          </Link>

          {/* Search Bar */}
          <form className="d-flex mx-auto w-50">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? 'nav-link fw-bold text-decoration-underline' : 'nav-link'}>
                Home
              </NavLink>
            </li>

            {/* Category Dropdown */}
            <li className="nav-item dropdown px-2">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </span>
              <ul className="dropdown-menu">
                {['electronics', 'women', 'men', 'footwear', 'home', 'stationary'].map((cat) => (
                  <li key={cat}>
                    <NavLink
                      className="dropdown-item"
                      to={`/category/${cat}`}
                      style={{ color: 'black', backgroundColor: 'white' }}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            {/* Profile Dropdown */}
            <li className="nav-item dropdown px-2">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </span>
              <ul className="dropdown-menu">
                <li><NavLink className={({ isActive }) => isActive ? 'dropdown-item fw-bold text-decoration-underline' : 'dropdown-item'} to="/profile-info">Profile Info</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'dropdown-item fw-bold text-decoration-underline' : 'dropdown-item'} to="/orders">Orders</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'dropdown-item fw-bold text-decoration-underline' : 'dropdown-item'} to="/about-project">About Project</NavLink></li>
              </ul>
            </li>

            {/* Cart Link */}
            <li className="nav-item px-2 position-relative">
              <NavLink
                to="/cart"
                className={({ isActive }) => isActive ? 'nav-link fw-bold text-decoration-underline' : 'nav-link'}>
                Cart
              </NavLink>
              {totalCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalCount}
                </span>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid" style={{ marginTop: '80px' }}>
        <div className="row">
          {/* Sort By */}
          <div className="col-md-2 p-3 bg-light">
            <h5>Sort By</h5>
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="col-md-10">
            <ProductGrid sortBy={sortBy} search={search} showAddToCart={true} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3 mt-4">
        &copy; 2025 Azyra. All rights reserved.
      </footer>
    </div>
  );
}
