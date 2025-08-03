import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <span>||</span> Shinde News Paper Agency
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Services">Services</Link>
        {/* <Link to="/Pricing">Pricing</Link> */}
        <Link to="/papers">Papers</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="#contact" className="navbar-btn">Contact Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
