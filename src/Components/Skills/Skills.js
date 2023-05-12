import React from "react";
import "../Skills/Skills.css";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Skills(props) {
  const linkStyling = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div id="skills">
      <div className="content-banner-skills">{props.data.contentbanner}</div>
      <div className="content">
        <div className="content-1">
          <div className="skills-description">
            <div className="competency-title">
              {props.data.skills.competencies.title}
            </div>
            <div className="competencies">
              {props.data.skills.competencies.list.map((skill, index) => {
                return (
                  <div key={index} className="competencies-item">
                    <StarIcon /> {skill}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="certifications">
            {props.data.skills.highlights.map((content, index) => {
              return (
                <span className="skill-content" key={index}>
                  <span> ✅ {content.content}</span>
                  {index >= 1 && index <= 3 && (
                    <a
                      href={content.link}
                      style={linkStyling}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconButton
                        size="small"
                        sx={{
                          color: "white",
                          backgroundColor: "#5C64CF",
                          "&:hover": {
                            backgroundColor: "grey",
                          },
                        }}
                      >
                        <ArrowOutwardIcon fontSize="small" />
                      </IconButton>
                    </a>
                  )}
                </span>
              );
            })}
          </div>
        </div>
        <div className="skills-icons">
          {props.data.keyskills.map((element, index) => {
            return (
              <Card
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: 2,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  transition: "ease-out",
                  "&:hover": {
                    backgroundColor: "#C8B4AC",
                  },
                }}
                key={index}
                elevation={6}
              >
                <CardContent>
                  <img
                    src={element.image}
                    alt="profile"
                    width="40px"
                    height="40px"
                    className="profile-skills"
                  />
                  <br />
                  {element.name}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
