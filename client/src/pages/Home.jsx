import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../api';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

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
        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>Loading premium products...</div>
        ) : (
          <div className="product-grid">
            {products.length > 0 ? (
              products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p>No products found. Start by adding some in the dashboard!</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
