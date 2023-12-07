import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://instagram.com/8818rajesh?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" id="insta" aria-hidden="true"></i>
          </a>
          <a href="https://wa.me/9949698825" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.youtube.com/@creativestudiorajeshsrisha7510" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="mailto:your@email.com">
            <i className="far fa-envelope"></i>
          </a>
        </div>
      </div>
      <p>&copy; 2023 Your Studio Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

