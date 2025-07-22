import React from 'react';
import './Footer.css';
import smoothScroll from '../utils/smoothScroll';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Mohan Babu. All rights reserved.
          </div>
          <div className="footer-links">
            <a href="#hero" className="footer-link" onClick={smoothScroll}>Home</a>
            <a href="#about" className="footer-link" onClick={smoothScroll}>About</a>
            <a href="#skills" className="footer-link" onClick={smoothScroll}>Skills</a>
            <a href="#projects" className="footer-link" onClick={smoothScroll}>Projects</a>
            <a href="#additional-info" className="footer-link" onClick={smoothScroll}>Contact</a>
          </div>
          {/* ... rest of your footer code ... */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;