import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function ProfileInfoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setErrorMsg('No token found. Please log in.');
        navigate('/auth', { replace: true });
        return;
      }

      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/auth/profile`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Server error: ${res.status} - ${text}`);
        }

        const data = await res.json();
        console.log('Fetched profile:', data);
        setUser(data);
        setLoading(false);
      } catch (err) {
        console.error('Profile fetch error:', err.message);
        setErrorMsg('Session expired or unable to load profile. Please log in again.');
        localStorage.removeItem('token');
        navigate('/auth', { replace: true });
      }
    };

    fetchProfile();
  }, [navigate, location]);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/auth', { replace: true });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">E-Commerce</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                  Category
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/category/Electronics">Electronics</Link></li>
                  <li><Link className="dropdown-item" to="/category/Fashion">Fashion</Link></li>
                  <li><Link className="dropdown-item" to="/category/Accessories">Accessories</Link></li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle ${location.pathname === '/profile-info' ? 'text-decoration-underline' : ''}`}
                  to="#" role="button" data-bs-toggle="dropdown"
                >
                  Profile
                </Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/profile-info">Profile Info</Link></li>
                  <li><Link className="dropdown-item" to="/orders">Orders</Link></li>
                  <li><Link className="dropdown-item" to="/about-project">About Project</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item text-danger" onClick={handleSignOut}>Sign Out</button></li>
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Profile Info */}
      <div className="container flex-grow-1 d-flex justify-content-center align-items-center">
        {loading ? (
          <div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status"></div>
            <div className="mt-2">Loading profile...</div>
          </div>
        ) : user ? (
          <div className="card p-4 mt-5 w-100" style={{ maxWidth: '500px' }}>
            <h3 className="text-center mb-4">Profile Information</h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        ) : (
          <div className="alert alert-danger mt-5">
            {errorMsg || 'No user info available.'}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3 mt-auto">
        © 2025 Azyra. All rights reserved.
      </footer>
    </div>
  );
}
