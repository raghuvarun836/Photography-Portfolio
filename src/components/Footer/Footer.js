import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.instagram.com/creative_studioz_?igsh=MWVwdzBvbzJ4YjEycg==" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" id="insta" aria-hidden="true"></i>
          </a>
          <a href="https://wa.me/9949698825" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.youtube.com/@creativestudiorajeshsrisha7510" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="mailto:k.p.rajesh888@gmail.com">
            <i className="far fa-envelope"></i>
          </a>
        </div>
      </div>
      <p>&copy; 2024 Creative Studioz. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

