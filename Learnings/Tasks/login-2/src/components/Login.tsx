import React, { useState } from 'react';
import './style.css';
 
const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [keepSignedIn, setKeepSignedIn] = useState<boolean>(false);
 
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };
 
  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="header">
          <img src="signup.png" alt="Mantis Logo" className="logo" />
          <div className="header-text">
            <span className="logo-text">Mantis</span>
            <span className="version">v1.3.0</span>
          </div>
        </div>
        <div className="form login-form">
          <h2>Login</h2>
          <a href="/signup" className="link">Don't have an account?</a>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-options">
              <label>
                <input
                  type="checkbox"
                  checked={keepSignedIn}
                  onChange={() => setKeepSignedIn(!keepSignedIn)}
                />
                Keep me signed in
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
          <div className="login-with">
            <p>Login with</p>
            <div className="social-login">
              <button className="google-btn">
                <a href="https://www.google.co.in/">Google</a>
              </button>
              <button className="twitter-btn">
                <a href="https://www.twitter.com/login">Twitter</a>
              </button>
              <button className="facebook-btn">
                <a href="https://www.facebook.com/login">Facebook</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Login;