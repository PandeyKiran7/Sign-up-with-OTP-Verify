import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section company-info">
            <h3>Your Company</h3>
            <p>
              Empowering businesses with innovative solutions since 2024.
              Your success is our mission.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section quick-links">
            <h4>Quick Links</h4>
            <nav>
              <a href="/about">About Us</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact Us</a>
              <a href="/faq">FAQ</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact-info">
            <h4>Contact Us</h4>
            <p>Email: support@yourcompany.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Business Street, Tech City, TX 12345</p>
          </div>

          {/* Social Media Links */}
          <div className="footer-section social-media">
            <h4>Follow Us</h4>
            <nav>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <nav>
            <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
