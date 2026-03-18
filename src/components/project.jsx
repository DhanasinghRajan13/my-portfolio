import React from "react";
import "./style.css";

function Project() {
  return (
    <section className="projects">
      <h1 className="project-title">Projects</h1>
      <div className="project-container">
        <div className="project-cards">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio built using React and CSS.</p>
          <br/>
          <button>View Project</button>
        </div>
        <div className="project-cards">
          <h3>Todo App</h3>
          <p>Task management app using React.</p>
          <br /><br/>
          <button>View Project</button>
        </div>
        <div className="project-cards">
          <h3>Website landing page</h3>
          <p>Responsive landing page built using HTML and CSS with a focus on clean design and user-friendly layout.</p>
          <button>View Project</button>
        </div>
      </div>
    </section>
  );
}

export default Project;
