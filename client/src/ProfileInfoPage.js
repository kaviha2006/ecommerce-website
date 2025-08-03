import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function ProfileInfoPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      navigate('/auth', { replace: true });
      return;
    }

    fetch('http://localhost:5000/api/auth/profile', {
      headers: { Authorization: 'Bearer ' + token }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUser(data.user);
          if (location.state?.fromCheckout) {
            navigate('/order-confirmed', { replace: true });
          }
        } else {
          localStorage.removeItem('token');
          navigate('/welcome-auth', { replace: true });
        }
      })
      .catch(() => {
        localStorage.removeItem('token');
        navigate('/welcome-auth', { replace: true });
      })
      .finally(() => setLoading(false));
  }, [navigate, location.state]);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/auth', { replace: true });
  };

  if (loading) {
    return <div className="text-center mt-5">Loading profile...</div>;
  }

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'beige' }}>
      {/* ✅ Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">Azyra</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="categoryDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Category
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/category/electronics">Electronics</Link></li>
                  <li><Link className="dropdown-item" to="/category/women">For Women</Link></li>
                  <li><Link className="dropdown-item" to="/category/men">For Men</Link></li>
                  <li><Link className="dropdown-item" to="/category/footwear">Footwear</Link></li>
                  <li><Link className="dropdown-item" to="/category/home">Home</Link></li>
                  <li><Link className="dropdown-item" to="/category/stationary">Stationary</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle active text-decoration-underline"
                  to="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
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
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ Profile Info Card */}
      <div className="container mt-5 pt-5">
        {user ? (
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow border-0">
                <div className="card-header bg-primary text-white text-center">
                  <h4 className="mb-0">User Profile</h4>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Name:</strong> {user.name}</li>
                    <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
                    <li className="list-group-item"><strong>Phone:</strong> {user.phone}</li>
                    <li className="list-group-item"><strong>Address:</strong> {user.address1}, {user.address2}</li>
                    <li className="list-group-item"><strong>City:</strong> {user.city}, {user.state} - {user.zip}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p>No user info available. Redirecting...</p>
          </div>
        )}
      </div>

      {/* ✅ Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        &copy; 2025 Azyra. All rights reserved.
      </footer>
    </div>
  );
}
