import React from "react";
import "./Projects.css";
import { Lists } from "./lists";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

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
            <Paper
              key={index}
              sx={{ width: { xs: 300, sm: 425 } }}
              elevation={6}
            >
              <div>
                <img
                  src={project.image}
                  alt={project.alt}
                  className="project-image"
                />
              </div>
              <div className="titleblock">{project.title}</div>
              <div className="project-text">{project.text}</div>
              <div className="action-buttons">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#756BEE",
                    fontWeight: 500,
                    gap: 1,
                    paddingLeft: { xs: 1, sm: 3 },
                    paddingRight: { xs: 1, sm: 3 },
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  <GitHubIcon />
                  See Code
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#756BEE",
                    "&:hover": {
                      backgroundColor: "black",
                      fontWeight: 300,
                      paddingLeft: { xs: 1, sm: 3 },
                      paddingRight: { xs: 1, sm: 3 },
                    },
                  }}
                >
                  Go Live
                  <ArrowOutwardIcon />
                </Button>
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
