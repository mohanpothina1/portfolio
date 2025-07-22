import React from 'react';
import './AdditionalInfo.css';
import { FaLanguage, FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const AdditionalInfo = () => {
  return (
    <section className="additional-info-section" id="additional-info">
      <div className="info-background">
        <div className="gradient-circle orange"></div>
        <div className="gradient-circle purple"></div>
        <div className="gradient-circle blue"></div>
      </div>
      
      <div className="info-container">
        <div className="section-header">
          <h2 className="info-heading">
            <span className="heading-highlight">Details</span> & Contact
          </h2>
          <p className="info-subheading">Everything you need to know about me</p>
        </div>

        <div className="info-row">
          <div className="info-card language-card">
            <div className="card-icon">
              <FaLanguage />
            </div>
            <h3>Languages</h3>
            <ul className="info-list">
              <li><span className="highlight">English:</span> Fluent</li>
              <li><span className="highlight">Telugu:</span> Native</li>
              <li><span className="highlight">Hindi:</span> Conversational</li>
            </ul>
          </div>

          <div className="info-card location-card">
            <div className="card-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Location</h3>
            <p>Hyderabad, India</p>
            <div className="map-link">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe /> View on Map
              </a>
            </div>
          </div>

          <div className="info-card availability-card">
            <div className="card-icon">
              <FaClock />
            </div>
            <h3>Availability</h3>
            <p>Immediate</p>
            <div className="timezone">
              <span>IST (UTC+5:30)</span>
            </div>
          </div>

        <div className="info-card contact-card">
  <div className="card-icon">
    <FaPhone />
  </div>
  <h3>Contact</h3>
  <ul className="contact-list">
    <li className="email-item">
      <a href="mailto:mohanbabupothina@gmail.com">
        <FaEnvelope /> mohanbabupothina@gmail.com
      </a>
    </li>
    <li>
      <a href="tel:+917989805424">
        <FaPhone /> +91 7989805424
      </a>
    </li>
  </ul>
</div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;