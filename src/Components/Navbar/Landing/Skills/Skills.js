import React from "react";
import "../Skills/Skills.css";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import bootstrap from "../../../../assets/bootstrap.svg";
import css from "../../../../assets/css.svg";
import html from "../../../../assets/html.svg";
import javascript from "../../../../assets/javascript.svg";
import mUI from "../../../../assets/materialui.svg";
import react from "../../../../assets/react.svg";
import mongoDB from "../../../../assets/mongoDB.svg";

function Skills() {
  return (
    <div className="content">
      <div className="skills-description">
        <span className="description-title">
          My <span className="fw-bolder fst-italic">Skills</span>
        </span>
        Showcased Some of the Technical Skills known. <br />
        Quick Learner and Adaptive to the Technology.
        <br />
        <br />
        <span className="certifications">
          <span>My Certifications</span>
          <ul>
            <li>
              Full Stack Development - BootStrap course - currently pursuing
            </li>
            <li>Enrolled and Completed Javascript Learner Course</li>
            <li>
              Participated in 30days Codekata Challenge organized by GUVI Geeks{" "}
            </li>
          </ul>
        </span>
        <span></span>
      </div>
      <div className="skills-icons">
        {[
          {
            name: "HTML",
            image: html,
          },
          {
            name: "CSS",
            image: css,
          },
          {
            name: "Javascript",
            image: javascript,
          },
          {
            name: "BootStrap",
            image: bootstrap,
          },
          {
            name: "MongoDB",
            image: mongoDB,
          },
          {
            name: "React JS",
            image: react,
          },
          {
            name: "Material UI",
            image: mUI,
          },
          {
            name: "NodeJS",
            image: mUI,
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
              }}
              key={index}
              elevation={6}
            >
              <CardContent>
                <img src={element.image} alt="profile" width="40" height="40" />
                <br />
                {element.name}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
