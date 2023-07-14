import React from "react";
import ProjectCardComponent from "./Component/Card";
import { projectData } from "./data";

const ProjectPage = () => {
  return (
    <>
      <h1>My Projects</h1>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Here's a list of my most recent work from the bootcamp!
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {projectData.map((project) => (
          <ProjectCardComponent key={project.title} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
