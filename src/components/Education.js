import React from 'react';
import { FaUserGraduate, FaSchool, FaBookOpen } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-background">
        <div className="gradient-circle pink"></div>
        <div className="gradient-circle blue"></div>
      </div>
      
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic foundation and continuous learning journey</p>

        <div className="education-wrapper">
          {/* BTech */}
          <div className="education-card left">
            <div className="icon">
              <FaUserGraduate />
            </div>
            <div className="details">
              <h3>B.Tech in Electronics and Communication</h3>
              <p className="institution">DVR & Dr. HS MIC College of Technology | 2019 - 2023</p>
              <p><strong>CGPA:</strong> 7.72</p>
              <p><strong>Project:</strong> IoT-Based Wireless Healthcare Monitoring System</p>
              <ul className="project-points">
                <li>Designed an IoT prototype using Arduino ATmega2560, Sensors, GSM/WiFi modules.</li>
                <li>Enabled real-time vitals monitoring with ThingSpeak integration & emergency alerts.</li>
              </ul>
            </div>
          </div>

          {/* Intermediate */}
          <div className="education-card right">
            <div className="icon">
              <FaBookOpen />
            </div>
            <div className="details">
              <h3>Intermediate (12<sup>th</sup> Grade)</h3>
              <p className="institution">Sri Chaitanya Junior College | 2019</p>
              <p><strong>CGPA:</strong> 7.25</p>
            </div>
          </div>

          {/* Schooling */}
          <div className="education-card right">
            <div className="icon">
              <FaSchool />
            </div>
            <div className="details">
              <h3>Secondary School (10<sup>th</sup> Grade)</h3>
              <p className="institution">Sri Gowtham High School | 2017</p>
              <p><strong>CGPA:</strong> 8.2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;