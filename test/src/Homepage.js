import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <div className="container">
          <h1>My Portfolio</h1>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <h2>Welcome to My Portfolio</h2>
          <p>I'm excited to showcase my projects and skills.</p>
          <a href="#projects" className="btn">View Projects</a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>Add your about content here...</p>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-list">
            {/* Project items will be dynamically generated here */}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Add your contact form or contact information here...</p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
