import React from "react";

function SelectedProject({ project }) {
  return (
    <div className="selected-project">
      <h2>{project.title}</h2>
      {project.link ? <a href={project.link}>{project.link}</a> : null}
      <p>{project.description}</p>
      <h2 className="tech-heading">Tech Used</h2>
      {project.tech.map((tech) => (
        <li>{tech}</li>
      ))}
    </div>
  );
}

export default SelectedProject;
