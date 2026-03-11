import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card glass fade-in">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <button className="icon-btn" title="Add to Cart">
            <ShoppingCart size={20} />
          </button>
          <button className="icon-btn" title="View Details">
            <Eye size={20} />
          </button>
        </div>
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="btn-add">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
