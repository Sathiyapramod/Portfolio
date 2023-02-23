import React from "react";
import "../Projects/Projects.css";
import { Lists } from "./lists";
import Paper from "@mui/material/Paper";

function Projects() {
  return (
    <div className="project-content">
      <div className="project-title">
        <span className="header">My Projects</span>
        <span className="sub-header">What I contributed</span>
      </div>
      <div className="project-description">
        {Lists.map((project, index) => {
          return (
            <Paper key={index} sx={{ width: 400, height: 600 }}>
              <div>
                <img
                  src={project.image}
                  alt="project"
                  width="400px"
                  height="600px"
                />
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
