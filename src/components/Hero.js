import React, { useEffect } from 'react';
import './Hero.css';
import profileImage from '../profile/mohan-profile.jpeg';
import { FaLinkedin, FaGithub, FaXTwitter} from 'react-icons/fa6';
import { FaFileDownload } from 'react-icons/fa'; // Get these from fa

import resumePDF from '../resume/Mohan_JavaDeveloper_Resume.pdf'


const Hero = () => {
  useEffect(() => {
    const floatElements = document.querySelectorAll('.float-animation');
    floatElements.forEach(el => {
      el.style.animation = `float 6s ease-in-out infinite`;
      el.style.animationDelay = `${Math.random() * 2}s`;
    });
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="gradient-circle pink"></div>
        <div className="gradient-circle blue float-animation"></div>
        <div className="gradient-circle green float-animation"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name">Mohan Babu Pothina</span>
            <span className="hero-highlight"></span>
          </h1>
          <div className="hero-badge">SOFTWARE ENGINEER</div>
          <h2 className="hero-subtitle">
            <span className="typing-animation">
              Full Stack Developer | Cloud & DevOps Enthusiast
            </span>
          </h2>
          <p className="hero-description">
            I build <span className="highlight"> robust backend APIs</span> using <span className="highlight">Java & Spring Boot and develop full stack applications </span>with React and cloud-native tools.


          </p>

          <div className="hero-actions">
            <a href="mailto:mohanbabupothina@gmail.com" className="hero-button primary">
              <span>Contact Me</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
           <a 
          href={resumePDF} // Use the imported PDF
          className="hero-button secondary" 
          download="MohanBabu_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        ><FaFileDownload className="resume-icon" />
          <span>Download Resume</span>
        </a>

          </div>

          <div className="social-icons">
            <a href="https://linkedin.com/in/mohan-babu-pothina" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/mohanpothina1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-border"></div>
          <img src={profileImage} alt="Mohan Babu Pothina" className="hero-image" />
         
        </div>
      </div>
    </section>
  );
};

export default Hero;