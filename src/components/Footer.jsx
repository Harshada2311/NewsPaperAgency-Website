import React from 'react';
import '../CSS/footer.css';

const Footer = () => {
  return (
    <>
      {/* <div className="message-section">
        <div className="message-text">
          <h2>Send us a message if you have<br />an issue with your Paper Supplement.</h2>
        </div>
        <div className="message-button">
          <button>Contact Us Now</button>
        </div>
      </div> */}
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="logo">Shinde News Paper Agency</h2>
        </div> 

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Marketing</li>
            <li>SEO Service</li>
            <li>Digital market</li>
            <li>Content create</li>
            <li>Find Us</li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Customer Care</h3>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>News & Articles</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div class="footer-column contact">
          <h3>9981055263</h3> 
          <p>Shindeseema081@gmail.com</p>
          <p>Sus Road Pashan,<br />Balaji Chowk, Pune 411021</p>
          <div class="social-icons">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-globe"></i>
            <i class="fa fa-instagram"></i>
          </div>
        </div>
      </div>
      </footer>
    </>

  );
};

export default Footer;
