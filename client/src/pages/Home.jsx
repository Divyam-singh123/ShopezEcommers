import React from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

const MOCK_PRODUCTS = [
  { _id: '1', name: 'Premium Wireless Headphones', price: 299, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800', category: 'Electronics' },
  { _id: '2', name: 'Minimalist Watch', price: 150, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800', category: 'Accessories' },
  { _id: '3', name: 'Smart Home Speaker', price: 199, image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800', category: 'Electronics' },
  { _id: '4', name: 'Leather Carryall', price: 350, image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800', category: 'Fashion' },
];

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero container">
        <div className="hero-content fade-in">
          <span className="hero-tag">New Collection 2026</span>
          <h1>Experience the Future of <span>Shopping.</span></h1>
          <p>Discover our curated collection of premium products designed for the modern lifestyle.</p>
          <div className="hero-btns">
            <button className="btn-primary">Shop Now</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image fade-in">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200" alt="Hero" className="glass" />
        </div>
      </section>

      <section className="products container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <a href="/shop">View All</a>
        </div>
        <div className="product-grid">
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
