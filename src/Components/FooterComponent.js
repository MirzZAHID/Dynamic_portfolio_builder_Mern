// src/components/FooterComponent.js
import React from 'react';
import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className='text-black'>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>

        <div className="footer-section">
          <h3 className='text-black'>Follow Us</h3>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>

        <div className="footer-section">
          <h3 className='text-black'>Address</h3>
          <p>123 Main Street</p>
          <p>Cityville, State, Country</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Your Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
