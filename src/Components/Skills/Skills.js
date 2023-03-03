import React from "react";
import "../Skills/Skills.css";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Skills() {
  const linkStyling = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div id="skills">
      <div className="content-banner">
        My Skills
        <span className="tilted-skills">Competencies</span>
      </div>
      <div className="content">
        <div className="content-1">
          <div className="skills-description">
            <div className="competency-title">Competencies:</div>
            <div className="competencies">
              {["Team Player", "Avid Learner", "Adaptability"].map(
                (skill, index) => {
                  return (
                    <div key={index}>
                      <StarIcon /> {skill}
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="certifications">
            <div className="certifications">
              {[
                {
                  content:
                    "Currently pursuing Full Stack Development - BootCamp course at GUVI Geeks",
                },
                {
                  content:
                    "Enrolled and Completed Javascript Learner Course from GUVI",
                  link: "https://www.guvi.in/verify-certificate?id=2z64uM1641872TO823",
                },
                {
                  content:
                    "Participated in 30days Codekata Challenge organized by GUVI Geeks",
                  link: "https://drive.google.com/file/d/1dgd1xsC7xkSy9ubHagRVSXBxauh417JZ/view?usp=share_link",
                },
                {
                  content:
                    "Typewriting Senior Grade(English) - certified from DOTE, Govt., of Tamilnadu",
                },
              ].map((content, index) => {
                return (
                  <span className="skill-content" key={index}>
                    <span>{content.content}</span>
                    {index >= 1 && index <= 2 ? (
                      <a href={content.link} style={linkStyling} target="_blank" rel="noreferrer">
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
                    ) : (
                      ""
                    )}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="skills-icons">
          {[
            {
              name: "HTML",
              image: "https://img.icons8.com/color/256/html-5.png",
            },
            {
              name: "CSS",
              image: "https://img.icons8.com/color/256/css3.png",
            },
            {
              name: "Javascript",
              image: "https://img.icons8.com/fluency/256/javascript.png",
            },
            {
              name: "BootStrap",
              image: "https://img.icons8.com/color/256/bootstrap.png",
            },
            {
              name: "MongoDB",
              image:
                "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png",
            },
            {
              name: "React JS",
              image: "https://img.icons8.com/color/256/react-native.png",
            },
            {
              name: "Material UI",
              image: "https://img.icons8.com/color/256/material-ui.png",
            },
            {
              name: "NodeJS",
              image: "https://img.icons8.com/color/256/nodejs.png",
            },
          ].map((element, index) => {
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
