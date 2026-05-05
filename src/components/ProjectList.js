import React from "react";

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((proj, index) => (
        <div key={index} className="project-card">
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
