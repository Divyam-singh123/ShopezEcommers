import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page container">
      <div className="auth-card glass fade-in">
        <div className="auth-toggle">
          <button 
            className={isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={!isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="auth-subtitle">
          {isLogin 
            ? 'Enter your credentials to access your account' 
            : 'Join SHOPEZ and start your shopping journey'}
        </p>

        <form className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
          )}
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          {!isLogin && (
            <div className="form-group">
              <label>Role</label>
              <select defaultValue="customer">
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
          )}
          <button type="submit" className="btn-primary auth-submit">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="auth-footer">
          {isLogin 
            ? "Don't have an account? " 
            : "Already have an account? "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Create one' : 'Login here'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Auth;
