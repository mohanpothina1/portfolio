import React from "react";
import "./Project.css";
import cricketImage from "../projects/cricket.jpg";
import bankImage from "../projects/bank.jpg";
import vevaImage from "../projects/image.png";

const projects = [
  {
    title: "Cricket Fantasy Microservices",
    description: "Developed a scalable fantasy cricket platform with 6 independent microservices. Used Kafka for async communication, containerized with Docker, and optimized REST APIs for performance.",
    techStack: "Java, Spring Boot, Kafka, MongoDB, MySQL, Docker, JUnit",
    github: "https://github.com/mohanpothina1/cricket-fantasy-microservices",
    image: cricketImage,
  },
  {
    title: "Bank Statement Aggregator",
    description: "Backend system to aggregate and manage bank statements from multiple sources. Used AWS S3 for storage, Spring Data JPA for parsing, and implemented role-based access control.",
    techStack: "Java, Spring Boot, SQL, AWS S3",
    github: "https://github.com/mohanpothina1/Bank-Statement-Aggregator",
    image: bankImage,
  },
  {
    title: "Veva Jewels eCommerce",
    description: "A full-stack eCommerce platform with OTP login, product catalog, cart, profile, and secure order management. Built using React, Spring Boot, MongoDB, and JWT.",
    techStack: "ReactJS, Java, Spring Boot, MongoDB, JWT",
    github: "https://github.com/mohanpothina1/veva-jewels",
    image: vevaImage,
  },
];

const Project = () => {
  return (
    <section className="project-section" id="projects">
      <div className="project-background">
        <div className="gradient-circle pink"></div>
        <div className="gradient-circle blue"></div>
      </div>
      
      <div className="project-container">
        <h2 className="project-title">Projects</h2>
        
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image" 
                  loading="lazy" // Optimized loading
                />
              </div>
              <div className="card-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  <span>Tech Stack:</span> {project.techStack}
                </div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <span>View on GitHub</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;