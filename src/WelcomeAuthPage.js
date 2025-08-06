import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function WelcomeAuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromCheckout = location.state?.fromCheckout || false;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="mb-4">Welcome to Azyra!</h1>
      <p className="mb-3">Are you a new user or existing customer?</p>
      <div>
        <button
          className="btn btn-success m-2"
          onClick={() => navigate('/register', { state: { fromCheckout } })}
        >
          I'm a New User
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => navigate('/login', { state: { fromCheckout } })}
        >
          I'm an Existing User
        </button>
      </div>
    </div>
  );
}
