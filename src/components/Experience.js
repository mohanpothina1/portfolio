import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "ERPNext/Frappe Developer",
      company: "Mentorship Program",
      date: "May 2025 – June 2025",
      points: [
        "Customized ERP modules using dynamic workflows",
        "Implemented role-based permissions and scripts",
        "Built efficient DocTypes and streamlined operations"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Freelance Mentorship",
      date: "Oct 2024 – Apr 2025",
      points: [
        "Built e-commerce platforms with optimized APIs",
        "Setup CI/CD using Maven & Docker",
        "Achieved 95% test coverage using JUnit"
      ]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-background">
        <div className="gradient-circle teal"></div>
        <div className="gradient-circle indigo"></div>
      </div>
      
      <div className="experience-container">
        <h2 className="experience-title">Professional Journey</h2>
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="card-header">
                <h3>{exp.title}</h3>
                <div className="company-badge">{exp.company}</div>
              </div>
              <div className="card-date">{exp.date}</div>
              <ul className="card-points">
                {exp.points.map((point, i) => (
                  <li key={i}>
                    <div className="point-marker"></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="card-footer"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;