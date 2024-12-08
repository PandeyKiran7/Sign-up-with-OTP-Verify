import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <nav>
          <a href="/terms">Terms of Service</a> |{" "}
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </footer>
    </div>
  )
};

export default Footer;
