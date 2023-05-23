import React from "react";
import "../Landing/Landing.css";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import useMediaquery from "../../Hooks/useMediaquery";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profile from "../../../src/assets/profilePic.jpeg";
import Typewriter from "typewriter-effect";

export const anchorStyle = {
  textDecoration: "none",
  color: "white",
};

export const iconStyling = {
  color: "black",
};

function Landing(props) {
  const isDesktop = useMediaquery("(min-width:768px)");
  return (
    <section id="home">
      <div className="content-banner-landing">
        {props.data.contentbanner}
        <span className="tilted-about">{props.data.tilted}</span>
      </div>
      <div className="landing">
        <div className="landing-content">
          <div className="name">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <span>{props.data.name}</span>
            </motion.div>
          </div>
          <div className="bio">
            {props.data.span1}
            <br />
            <span>
              <span className="typewriter">
                <Typewriter
                  options={{
                    strings: props.data.typertext,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 90,
                  }}
                />
              </span>
            </span>
            <br />
            {props.data.bio}
          </div>
          <span className="landing-button">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1.0 }}
              transition={{ duration: 1.1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <span className="landing-button-actions">
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: isDesktop ? 16 : 12,
                    backgroundColor: "#756BEE",
                    color: "white",
                    fontWeight: 500,
                    paddingLeft: 4,
                    paddingRight: 4,
                    paddingTop: 2,
                    paddingBottom: 2,
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  <a href="#contact" style={anchorStyle} rel="noreferrer">
                    {props.data.buttonContent}
                  </a>
                </Button>
                <Button
                  sx={{
                    fontSize: isDesktop ? 16 : 12,
                    backgroundColor: "#756BEE",
                    color: "white",
                    fontWeight: 500,
                    paddingLeft: 4,
                    paddingRight: 4,
                    paddingTop: 2,
                    paddingBottom: 2,
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  <a
                    href={props.data.resumeContent}
                    style={anchorStyle}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download Resume
                  </a>
                </Button>
              </span>
            </motion.div>
          </span>
          <span className="links">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1.0 }}
              transition={{ duration: 1.1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <IconButton color="inherit">
                <a
                  href={props.data.links.github}
                  rel="noreferrer"
                  style={iconStyling}
                >
                  <GitHubIcon sx={{ fontSize: 30 }} />
                </a>
              </IconButton>
              <IconButton color="inherit">
                <a
                  href={props.data.links.linkedin}
                  rel="noreferrer"
                  style={iconStyling}
                >
                  <LinkedInIcon sx={{ fontSize: 30 }} />
                </a>
              </IconButton>
            </motion.div>
          </span>
        </div>
        <div className="profile-pic">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: +50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="img-thumbnail">
              <img src={profile} width="250" height="300" alt="profile" />
            </div>
          </motion.div>
        </div>
        <div className="scroll-down">{props.data.scrollNotifier}</div>
      </div>
    </section>
  );
}

export default Landing;
