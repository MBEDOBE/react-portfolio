import React from "react";
import Separator from "../../common/separator";
import { ProjectsData } from "../../data/projects";
import ProjectCard from "./project-card";
import "./projects.css";

function Projects() {
  const data = ProjectsData;
  return (
    <div className="projects">
      <Separator/>
      <label className="section-title">My Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
