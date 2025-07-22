import React from 'react';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPostman, SiPython } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-background">
        <div className="gradient-circle orange"></div>
        <div className="gradient-circle purple"></div>
      </div>
      
      <div className="skills-content">
        <h2 className="skills-title">Skills</h2>

        {/* Technical Skills */}
        <h3 className="skills-subtitle">Technical Expert</h3>
        <div className="skills-row">
          <div className="skill-item"><FaJava className="skill-icon" /> Java</div>
          <div className="skill-item"><SiSpringboot className="skill-icon" /> Spring Boot</div>
          <div className="skill-item"><MdApi className="skill-icon" /> REST APIs</div>
          <div className="skill-item"><SiMysql className="skill-icon" /> MySQL</div>
          <div className="skill-item"><SiMongodb className="skill-icon" /> MongoDB</div>
          <div className="skill-item"><FaGitAlt className="skill-icon" /> Git</div>
          <div className="skill-item"><SiPostman className="skill-icon" /> Postman</div>
          <div className="skill-item"><FaReact className="skill-icon" /> React</div>
          <div className="skill-item"><FaHtml5 className="skill-icon" /> HTML</div>
          <div className="skill-item"><FaCss3Alt className="skill-icon" /> CSS</div>
          <div className="skill-item"><SiPython className="skill-icon" /> Python</div>
        </div>

        {/* Soft Skills */}
        <h3 className="skills-subtitle">Soft Skills</h3>
        <div className="skills-row">
          <div className="skill-item">🗣️ Communication</div>
          <div className="skill-item">🧠 Problem Solving</div>
          <div className="skill-item">🤝 Teamwork</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;