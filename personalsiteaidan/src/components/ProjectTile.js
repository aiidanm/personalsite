import React from "react";

function ProjectTile({ project, onClick }) {
  return (
    <div className="project-tile" onClick={onClick}>
      {/* Placeholder image or real image source */}
      <img src={project.image} alt={project.title} className="project-image" />
      <h3>{project.title}</h3>
    </div>
  );
}

export default ProjectTile;
