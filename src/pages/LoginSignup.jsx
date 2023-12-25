import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './pagesCss/LoginSignup.css';

const LoginSignup = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // Placeholder logic for signup success
    Swal.fire({
      icon: 'success',
      title: 'Signed up successfully!',
      text: 'You have successfully signed up.',
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder logic for login success
    Swal.fire({
      icon: 'success',
      title: 'Logged in successfully!',
      text: 'You have successfully logged in.',
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const toggleForm = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{showLogin ? 'Login' : 'Sign Up'}</h1>
        {showLogin ? (
          <form onSubmit={handleLogin}>
            <div className="loginsignup-fields">
              <input type="text" placeholder='Username' required />
              <input type="password" placeholder='Password' required />
            </div>
            <button type="submit">Login</button>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <div className="loginsignup-fields">
              <input type="text" placeholder='Your Name' required />
              <input type="email" placeholder='Email Address' required />
              <input type="password" placeholder='Password' required />
            </div>
            <button type="submit">Continue</button>
          </form>
        )}
        <p className="loginsignup-login" onClick={toggleForm}>
          {showLogin ? 'Sign Up here' : 'Already have an account? Login here'}
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' required />
          <p>By continuing, I agree to the terms and policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
