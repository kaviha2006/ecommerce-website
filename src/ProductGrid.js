import React, { useEffect, useState, useContext } from 'react';
import './Home.css';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

export default function ProductGrid({ sortBy, search = '', showAddToCart = false }) {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/products`)
    .then(res => res.json())
    .then(data => {
      setProducts(data);
    })
    .catch(err => console.error('Fetch error:', err));
}, []);



  const filteredProducts = products.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'low') return a.price - b.price;
    if (sortBy === 'high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="container mt-5 pt-4">
      <div className="row">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((item, index) => {
            const cartItem = cartItems.find(ci => ci._id === item._id);
            return (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card h-100 shadow">
                  <img
                    src={item.imageUrl}
                    className="card-img-top product-img"
                    alt={item.name}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title">{item.name}</h6>
                    <p className="card-text fw-bold">₹{item.price}</p>
                    <p className="card-text">{item.description}</p>
                    <div className="rating text-warning mb-2">
                      {'⭐'.repeat(Math.round(item.rating))}
                    </div>
                    {showAddToCart && (
                      <button
                        className="btn btn-outline-primary mt-auto mb-2"
                        onClick={() => addToCart({ ...item, quantity: 1 })}
                      >
                        Add to Cart
                      </button>
                    )}
                    {cartItem && (
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(item._id)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center w-100 mt-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2O9jcdoCxoz6pEaI_rP0ansJjdONbO-OWg&s"
              alt="No results found"
              className="img-fluid"
              style={{ maxHeight: '300px' }}
            />
            <div className="mt-3">
              <Link to="/home" className="btn btn-primary">Continue Shopping</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
