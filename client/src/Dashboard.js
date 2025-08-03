// Home.js
import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <div>
            {/* Header Section */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
                <div className="container-fluid">
                    {/* Logo */}
                    <a className="navbar-brand fw-bold" href="#">Azyra</a>

                    {/* Search Bar */}
                    <form className="d-flex mx-auto w-50">
                        <input className="form-control me-2" type="search" placeholder="Search products..." />
                    </form>

                    {/* Right Menu */}
                    <ul className="navbar-nav">
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#">Category</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#">Cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* Main Content */}
            <div className="container-fluid" style={{ marginTop: '80px' }}>
                <div className="row">
                    {/* Sort By */}
                    <div className="col-md-2 p-3 bg-light">
                        <h5>Sort By</h5>
                        <select className="form-select">
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Rating</option>
                        </select>
                    </div>

                    {/* Products Grid */}
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-3 mb-4">
                                <div className="card h-100">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWxJ6o8m47uHduGfxg8Rj2NXmcvjTOMTrkA&s" className="card-img-top" alt="Product 1" style={{ height: '180px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h6 className="card-title">wireless headphone</h6>
                                        <p className="card-text">₹113</p>
                                        <div className="rating">★ 3.9 (10,263 Reviews)</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4">
                                <div className="card h-100">
                                    <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-hair-accessory/3/h/z/3-pcs-hawaiian-flower-hair-clips-for-women-flower-hair-claw-original-imahb98gbu7tg2zy.jpeg?q=20&crop=false" className="card-img-top" alt="Product 2" style={{ height: '180px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h6 className="card-title">flower clips</h6>
                                        <p className="card-text">₹103</p>
                                        <div className="rating">★ 4.2 (18,291 Reviews)</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4">
                                <div className="card h-100">
                                    <img src="https://images.meesho.com/images/products/375280963/kiahw_512.webp" className="card-img-top" alt="Product 3" style={{ height: '180px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h6 className="card-title">ballpoint pen(10)</h6>
                                        <p className="card-text">₹108</p>
                                        <div className="rating">★ 3.9 (39,911 Reviews)</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4">
                                <div className="card h-100">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQJYoItRJRiZu-wSicwzVT-1VOvZqL9lYCQ&s" className="card-img-top" alt="Product 4" style={{ height: '180px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h6 className="card-title">Flipflops (Pack of 3)</h6>
                                        <p className="card-text">₹193</p>
                                        <div className="rating">★ 4.0 (43,367 Reviews)</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4">
                                <div className="card h-100">
                                    <img src="https://tiimg.tistatic.com/fp/1/007/539/pink-and-orange-double-shaded-beautiful-cotton-bed-sheet-with-extra-comfort-164.jpg" className="card-img-top" alt="Product 5" style={{ height: '180px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h6 className="card-title">Printed Bedsheets</h6>
                                        <p className="card-text">₹250</p>
                                        <div className="rating">★ 4.1 (15,200 Reviews)</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4">
                                <div className="card h-100">
                                    <img src="https://jewelemarket.com/cdn/shop/files/E3313OX_1_701a836f-ca88-4a1d-99b7-6bd18ae1cbf1.jpg?v=1742548834" className="card-img-top" alt="Product 6" style={{ height: '180px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h6 className="card-title">jhumka</h6>
                                        <p className="card-text">₹199</p>
                                        <div className="rating">★ 3.8 (8,421 Reviews)</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4">
                                <div className="card h-100">
                                    <img src="https://rukminim2.flixcart.com/image/750/900/kidgnm80-0/watch/1/x/i/gents-exclusive-3-designer-combo-casual-partywear-formal-original-imafy6zgjbuqjkwg.jpeg?q=90&crop=false" className="card-img-top" alt="Product 7" style={{ height: '180px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h6 className="card-title">Analog Watch Combo</h6>
                                        <p className="card-text">₹349</p>
                                        <div className="rating">★ 4.5 (11,200 Reviews)</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4">
                                <div className="card h-100">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FInPP_st8l6m0Wv2UO5oXYP1FxsG6Peqsg&s" className="card-img-top" alt="Product 8" style={{ height: '180px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h6 className="card-title">Women’s Bracelet Set</h6>
                                        <p className="card-text">₹179</p>
                                        <div className="rating">★ 4.3 (9,300 Reviews)</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white text-center p-3 mt-4">
                &copy; 2025 Azyra. All rights reserved.
            </footer>
        </div>
    );
}