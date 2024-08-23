import React from 'react';
 import './styles.css';
 
const Signup: React.FC = () => {
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
        <div className="signup-form">
        <div><h2>Sign up</h2></div>
          <div className='Login-link'><a href="/login" className="link">Already have an account?</a></div>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input type="text" id="firstName" placeholder="John" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input type="text" id="lastName" placeholder="Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" placeholder="Demo Inc." />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input type="email" id="email" placeholder="demo@company.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="******" required />
              <span className="password-strength poor">Poor</span>
            </div>
            <div className="terms">
              <p>
                By Signing up, you agree to our{' '}
                <a href="#">Terms of Service</a> and{' '}
                <a href="#">Privacy Policy</a>
              </p>
            </div>
            <button type="submit" className="btn">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};
 
export default Signup;