// client/src/CategoryPage.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams, NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import './ProfileDropdown.css';
import { CartContext } from './CartContext';

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [search, setSearch] = useState(''); // ✅ For filtering
  const { addToCart, totalItems } = useContext(CartContext); // ✅ Use totalItems for badge

  useEffect(() => {
 fetch(`${process.env.REACT_APP_API_BASE_URL}/api/products?category=${categoryName}`)
    .then((res) => res.json())
    .then((data) => {
      let sorted = [...data];
      if (sortBy === 'low') sorted.sort((a, b) => a.price - b.price);
      else if (sortBy === 'high') sorted.sort((a, b) => b.price - a.price);
      else if (sortBy === 'rating') sorted.sort((a, b) => b.rating - a.rating);
      setProducts(sorted);
    })
    .catch((err) => console.error('Category fetch error:', err));
}, [categoryName, sortBy]);


  const categoryList = ['electronics', 'women', 'stationary', 'footwear', 'home', 'men'];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold">Azyra</Link>

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
                className={({ isActive }) => isActive ? 'nav-link fw-bold text-decoration-underline' : 'nav-link'}>
                Home
              </NavLink>
            </li>

            {/* Category Dropdown */}
            <li className="nav-item dropdown px-2">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                Category
              </span>
              <ul className="dropdown-menu">
                {categoryList.map((cat) => (
                  <li key={cat}>
                    <NavLink
                      className="dropdown-item"
                      to={`/category/${cat}`}
                      style={{
                        fontWeight: cat === categoryName ? 'bold' : 'normal',
                        textDecoration: cat === categoryName ? 'underline' : 'none',
                        color: 'black',
                        backgroundColor: 'white'
                      }}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            {/* Profile Dropdown */}
            <li className="nav-item dropdown px-2">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                Profile
              </span>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/profile-info">Profile Info</NavLink></li>
                <li><NavLink className="dropdown-item" to="/orders">Orders</NavLink></li>
                <li><NavLink className="dropdown-item" to="/about-project">About Project</NavLink></li>
              </ul>
            </li>

            {/* Cart with item count badge */}
            <li className="nav-item px-2 position-relative">
              <NavLink
                to="/cart"
                className={({ isActive }) => isActive ? 'nav-link fw-bold text-decoration-underline' : 'nav-link'}>
                Cart
              </NavLink>
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid" style={{ marginTop: '90px' }}>
        <div className="row">
          {/* Sort Sidebar */}
          <div className="col-md-2 bg-light p-3">
            <h5>Sort By</h5>
            <select className="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="">Sort By</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="col-md-10">
            <h3 className="text-center text-capitalize mb-4">{categoryName} Products</h3>
            <div className="row">
              {filteredProducts.length > 0 ? filteredProducts.map((item, index) => (
                <div className="col-md-3 mb-4" key={index}>
                  <div className="card h-100 shadow">
                    <img src={item.imageUrl} className="card-img-top" alt={item.name} />
                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title">{item.name}</h6>
                      <p className="card-text fw-bold">₹{item.price}</p>
                      <p className="card-text">{item.description}</p>
                      <div className="rating text-warning mb-2">
                        {'⭐'.repeat(Math.round(item.rating || 4))}
                      </div>
                      <button className="btn btn-outline-primary mt-auto" onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="text-center">No products found in this category.</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        &copy; 2025 Azyra. All rights reserved.
      </footer>
    </div>
  );
}
