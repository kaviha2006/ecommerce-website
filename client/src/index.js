import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import EcommerceHome from './EcommerceHome';
import Welcome from './Welcome';
import About from './About';
import Cart from './Cart';
import CategoryPage from './CategoryPage';
import WelcomeAuthPage from './WelcomeAuthPage';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import ProfileInfoPage from './ProfileInfoPage';
import OrderConfirmedPage from './OrderConfirmedPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import OrdersPage from './OrdersPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<EcommerceHome />} />
          <Route path="/form" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-project" element={<About />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/auth" element={<WelcomeAuthPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile-info" element={<ProfileInfoPage />} />
          <Route path="/profile-info" element={<ProfileInfoPage />} />
          <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
