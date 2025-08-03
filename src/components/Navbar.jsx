import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
  <div className="navbar-logo">
    <span>||</span> Shinde News Paper Agency
  </div>
  <div className="navbar-links">
    <Link to ="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/Services">Services</Link>
    <Link to="/Pricing">Pricing</Link>
    <Link to="/papers">Papers</Link>
    <Link to="/Contact">Contact</Link>
    <Link to="#contact" className="navbar-btn">Contact Now</Link>
  </div>
</nav>
  );
};

export default Navbar;
