import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-background">
        <div className="gradient-circle pink"></div>
        <div className="gradient-circle blue"></div>
      </div>
      
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <p className="about-description">
         I'm a passionate Full Stack Developer with a strong foundation in <span className="highlight">Java, Spring Boot, and microservices architecture</span>. I enjoy building scalable backend systems and have hands-on experience with technologies like <span className="highlight">MongoDB, MySQL, Docker, AWS, and Apache Kafka</span>. I’ve also worked with React to create seamless frontend experiences. I focus on writing clean, efficient code and <span className="highlight">continuously learning to stay updated with modern development practices</span>. My goal is to contribute to impactful products that solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;