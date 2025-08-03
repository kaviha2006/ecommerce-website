import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfileDropdown.css';

export default function About() {
  return (
    <div>
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
                  isActive ? 'nav-link fw-bold text-decoration-underline' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li>

            {/* Category Dropdown */}
            <li className="nav-item dropdown px-2">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                Category
              </span>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/category/electronics">Electronics</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/women">For Women</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/stationary">For Men</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/footwear">Footwear</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/home">Home Essentials</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/men">Stationary</NavLink></li>
              </ul>
            </li>

            {/* Profile Dropdown with "About Project" underlined */}
            <li className="nav-item dropdown px-2">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                Profile
              </span>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/profile-info">Profile Info</NavLink></li>
                <li><NavLink className="dropdown-item" to="/orders">Orders</NavLink></li>
                <li>
                  <NavLink
                    to="/about-project"
                    className={({ isActive }) =>
                      isActive ? 'dropdown-item fw-bold text-decoration-underline' : 'dropdown-item'
                    }
                  >
                    About Project
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Cart */}
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

      {/* About Content */}
      <div className="container text-center" style={{ marginTop: '100px', padding: '40px' }}>
        {/* Circle Image */}
        <img
          src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-landing-page-examples.jpg"
          alt="About"
          className="rounded-circle shadow"
          style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        />
        <h2 className="mt-4 fw-bold">About Azyra</h2>
        <p className="mt-3 lead">
          Welcome to <strong>Azyra</strong> — your one-stop online destination for top-quality electronics, fashion, home essentials, and more.
          Our mission is to make shopping effortless, exciting, and affordable.
        </p>
        <p>
          We aim to provide a smooth e-commerce experience for both casual buyers and dedicated deal-hunters.
          Built using modern web technologies like <strong>React</strong> and <strong>MongoDB</strong>, this project combines frontend design with real-time backend data.
        </p>
        <p>
          Whether you're exploring our diverse categories or reviewing your past orders, Azyra is designed to deliver a seamless user journey. Thank you for visiting our site!
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; 2025 Azyra. All rights reserved.
      </footer>
    </div>
  );
}
