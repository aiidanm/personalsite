import React from "react";
import ProjectTile from "./ProjectTile";

function ProjectGrid({ projects, onProjectSelect }) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectTile
          key={index}
          project={project}
          onClick={() => onProjectSelect(project)}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
