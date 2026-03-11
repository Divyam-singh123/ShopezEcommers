import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">SHOPEZ<span>.</span></div>
          <p>Your premium destination for modern e-commerce.</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Shop</h4>
            <a href="/shop">All Products</a>
            <a href="/categories">Categories</a>
            <a href="/deals">New Deals</a>
          </div>
          <div className="link-group">
            <h4>Support</h4>
            <a href="/faq">FAQ</a>
            <a href="/shipping">Shipping</a>
            <a href="/returns">Returns</a>
          </div>
          <div className="link-group">
            <h4>Connect</h4>
            <a href="/instagram">Instagram</a>
            <a href="/twitter">Twitter</a>
            <a href="/facebook">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 SHOPEZ. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
