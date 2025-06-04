import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">DigitalFutureFest</div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#mainstage" onClick={closeMenu}>Main Stage</a></li>
        <li><a href="#workshops" onClick={closeMenu}>Workshops</a></li>
        <li><a href="#gallery" onClick={closeMenu}>Gallery Sessions</a></li>
        <li><a href="#concourse" onClick={closeMenu}>Concourse</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
