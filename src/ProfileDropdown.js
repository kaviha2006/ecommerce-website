// components/ProfileDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileDropdown.css'; // Optional, for hover effect

export default function ProfileDropdown() {
  return (
    <div className="dropdown profile-hover">
      <span
        className="btn btn-outline-primary dropdown-toggle"
        id="profileDropdown"
      >
        Profile
      </span>
      <ul className="dropdown-menu" aria-labelledby="profileDropdown">
        <li>
          <Link className="dropdown-item" to="/profile-info">Profile Info</Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/orders">Orders</Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/about-project">About Project</Link>
        </li>
      </ul>
    </div>
  );
}
