import React from 'react';
import './Navbar.css';

const Navbar = () => {
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={scrollToTop} style={{cursor: 'pointer'}}>
          <span className="logo-highlight">Mohan</span> Babu
        </div>
        <ul className="navbar-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#additional-info" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;