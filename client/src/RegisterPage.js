// ✅ RegisterPage.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '', email: '', password: '', phone: '',
    address1: '', address2: '', city: '', state: '', zip: ''
  });

  const navigate = useNavigate();
  const location = useLocation();
  const fromCheckout = location.state?.fromCheckout || false;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (data.success) {
      alert("Registered successfully! Please login now.");
      navigate('/login', { state: { fromCheckout } }); // ✅ pass state
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control my-2" name="name" placeholder="Name" onChange={handleChange} required />
        <input className="form-control my-2" name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input className="form-control my-2" name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input className="form-control my-2" name="phone" placeholder="Phone" onChange={handleChange} required />
        <input className="form-control my-2" name="address1" placeholder="Address Line 1" onChange={handleChange} required />
        <input className="form-control my-2" name="address2" placeholder="Address Line 2" onChange={handleChange} />
        <input className="form-control my-2" name="city" placeholder="City" onChange={handleChange} required />
        <input className="form-control my-2" name="state" placeholder="State" onChange={handleChange} required />
        <input className="form-control my-2" name="zip" placeholder="Zip Code" onChange={handleChange} required />
        <button className="btn btn-success mt-3" type="submit">Register</button>
      </form>
    </div>
  );
}
