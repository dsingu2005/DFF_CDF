import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} DigitalFutureFest. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
