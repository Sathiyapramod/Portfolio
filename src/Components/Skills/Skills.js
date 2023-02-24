import React from "react";
import "../Skills/Skills.css";
import Card from "@mui/material/Card";
import { CardContent, ListItemIcon } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
function Skills() {
  return (
    <div className="content">
      <div className="skills-description">
        <span className="description-title">
          My <span className="fw-bolder fst-italic">Skills</span>
        </span>
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <StarIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Showcased Some of the Technical Skills known"
              className="skill-item"
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <StarIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Quick Learner and Adaptive to the Technology"
              className="skill-item"
            />
          </ListItem>
        </List>
        <br />
        <br />
        <span className="certifications">
          <span className="description-title">
            My <span className="fst-italic fw-bold">Certifications</span>
          </span>
        </span>
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowCircleRightOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Full Stack Development - BootStrap course - currently pursuing"
              className="skill-item"
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowCircleRightOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Participated in 30days Codekata Challenge organized by GUVI Geeks"
              className="skill-item"
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowCircleRightOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Enrolled and Completed Javascript Learner Course"
              className="skill-item"
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowCircleRightOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Typewriting in Senior Grade (English) - Certified from DOTE, Govt. of Tamilnadu"
              className="skill-item"
            />
          </ListItem>
        </List>
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
  );
}

export default Skills;
