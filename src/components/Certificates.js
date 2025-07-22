import React from 'react';
import './Certificates.css';
import { FaAws, FaJava, FaPython, FaLaptop } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Cloud Practitioner Essentials",
      provider: "Amazon Web Services",
      icon: <FaAws className="cert-icon" />
    },
    {
      title: "Java Full Stack",
      provider: "Frontlines EduTech",
      icon: <FaJava className="cert-icon" />
    },
    {
      title: "Python for Science",
      provider: "IBM",
      icon: <FaPython className="cert-icon" />
    },
    {
      title: "Field Technician - Computing & Peripherals",
      provider: "NSDC",
      icon: <FaLaptop className="cert-icon" />
    },
  ];

  return (
    <section className="certificates-section additional-info-section" id="certificates">
      <div className="info-background certificates-background">
        <div className="gradient-circle orange"></div>
        <div className="gradient-circle purple"></div>
        <div className="gradient-circle blue"></div>
      </div>
      
      <div className="info-container certificates-container">
        <div className="section-header">
          <h2 className="info-heading">
            <span className="heading-highlight">My</span> Certificates
          </h2>
          <p className="info-subheading">Professional qualifications and achievements</p>
        </div>

        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-icon-container">
                {cert.icon}
              </div>
              <h3 className="cert-name">{cert.title}</h3>
              <p className="cert-provider">{cert.provider}</p>
              <div className="cert-highlight"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;