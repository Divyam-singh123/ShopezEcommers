import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <div className="logo">
          SHOPEZ<span>.</span>
        </div>
        
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/categories">Categories</a>
        </div>

        <div className="nav-actions">
          <div className="search-bar">
            <Search size={18} />
            <input type="text" placeholder="Search products..." />
          </div>
          <a href="/cart" className="nav-icon">
            <ShoppingCart size={22} />
            <span className="badge">0</span>
          </a>
          <a href="/login" className="nav-icon">
            <User size={22} />
          </a>
          <button className="menu-btn">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
