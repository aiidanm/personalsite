import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProjectGrid from "./components/ProjectGrid";
import SelectedProject from "./components/SelectedProject";
import Footer from "./components/footer";

import { projectsData } from "./data/projectsData";

function App() {
  const [activeTab, setActiveTab] = useState("Freelance Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsToDisplay = projectsData[activeTab] || [];

  return (
    <div className="App">
      <Header title="AIDAN MURRAY" />

      <h3 className="personal-bio">
        Software developer with freelance paid experiance and a healthy
        obsession with personal projects. Expertise in react, node and
        Javascript. Fast learner of languauges and concepts as projects demand.{" "}
      </h3>
      <h3 className="second-intro">
        Currently looking for full time work{" "}
      </h3>

      <Navbar
        tabs={Object.keys(projectsData)}
        activeTab={activeTab}
        onTabClick={setActiveTab}
        setSelectedProject={setSelectedProject}
      />

      <ProjectGrid
        projects={projectsToDisplay}
        onProjectSelect={setSelectedProject}
      />

      {selectedProject && <SelectedProject project={selectedProject} />}

      <Footer />
    </div>
  );
}

export default App;
