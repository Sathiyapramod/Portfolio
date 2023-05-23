import React from "react";
import "./Projects.css";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import Chip from "@mui/material/Chip";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { anchorStyle } from "../Landing/Landing";

function Projects(props) {
  return (
    <div id="projects">
      <div className="content-banner-projects colored">
        {props.data.contentbanner}
      </div>
      <div className="project-content">
        <div className="project-title">
          <span className="sub-header">{props.data.subheader}</span>
        </div>
        <div className="project-description">
          {props.data.projectlists.map((project, index) => {
            return (
              <Paper
                key={index}
                sx={{
                  width: { xs: 300, sm: 425 },
                  height: 650,
                  padding: "1.2rem",
                }}
                elevation={6}
                className="project-card"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="project-image"
                />

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
                    <a
                      href={project.link1Fr}
                      style={anchorStyle}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <GitHubIcon />
                      {props.data.visitorAction1}
                    </a>
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
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      style={anchorStyle}
                    >
                      {props.data.visitorAction2}
                      <ArrowOutwardIcon />
                    </a>
                  </Button>
                  {project.linkBe !== "" && (
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
                      <a
                        href={project.linkBe}
                        target="_blank"
                        rel="noreferrer"
                        style={anchorStyle}
                      >
                        {props.data.visitorAction3}
                        <ArrowOutwardIcon />
                      </a>
                    </Button>
                  )}
                </div>
                <span>
                  Tags:{" "}
                  <Chip label={project.category} variant="outlined"></Chip>
                </span>

                {project.credentials !== "" ? (
                  <span>
                    For Admin Role, type {" "}
                    <b>{project.credentials.admin.username}</b> , password :{" "}
                    <b>{project.credentials.admin.password}</b>
                    <br />
                    For Users, type {" "}
                    <b>{project.credentials.user.username}</b> , password :{" "}
                    <b>{project.credentials.user.password}</b>
                  </span>
                ) : <span>Credentials Open</span>}
              </Paper>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
