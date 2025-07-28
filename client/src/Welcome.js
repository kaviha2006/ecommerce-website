import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfileDropdown.css'; // keeps dropdowns on hover

export default function Welcome() {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/06/22/39/91/360_F_622399137_jlEDsEN0pUMZA6jMKShRoq2po69QBQXj.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white'
      }}
    >
      {/* Overlay for visibility */}
      <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', flexGrow: 1 }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand fw-bold">Azyra</Link>

            <ul className="navbar-nav ms-auto">
              {/* Home */}
              <li className="nav-item px-2">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-link active text-decoration-underline fw-bold'
                      : 'nav-link'
                  }
                >
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
                  <li><NavLink className="dropdown-item" to="/category/electronics">Electronics</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/women">For Women</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/men">For Men</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/footwear">Footwear</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/home">Home Essentials</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/stationary">Stationary</NavLink></li>
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
                  <li><NavLink className="dropdown-item" to="/profile-info">Profile Info</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/orders">Orders</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/about-project">About Project</NavLink></li>
                </ul>
              </li>

              {/* Cart Link (✅ no dropdown) */}
              <li className="nav-item px-2">
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive ? 'nav-link fw-bold text-decoration-underline' : 'nav-link'
                  }
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{ height: '100vh', paddingTop: '60px' }}
        >
          <h1 className="display-4 fw-bold">Welcome to Azyra</h1>
          <p className="lead">Discover the best products at unbeatable prices!</p>
          <Link to="/home" className="btn btn-primary mt-3">Go to Shop</Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; 2025 Azyra. All rights reserved.
      </footer>
    </div>
  );
}
