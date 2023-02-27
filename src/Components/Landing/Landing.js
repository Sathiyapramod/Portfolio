import React from "react";
import "../Landing/Landing.css";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import useMediaquery from "../../Hooks/useMediaquery";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profile from "../../../src/assets/profilePic.jpeg";

function Landing() {
  const isDesktop = useMediaquery("(min-width:768px)");
  const anchorStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <section id="home">
      <div className="landing">
        <div className="landing-content">
          <div className="name">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <span> 👋🏼 Sathiyapramod </span>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span className="bio">
              I am a Full Stack Developer, Enthusiastic & Competitive Team
              player. <br />
              Presently focussed on Seeking Jobs on Web Developer , blended with
              knowledge of Front-end and NodeJS elements{" "}
            </span>
          </motion.div>
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
              <Button
                variant="outlined"
                sx={{
                  fontSize: isDesktop ? 16 : 12,
                  backgroundColor: "#756BEE",
                  color: "white",
                  fontWeight: 500,
                  paddingLeft: 3,
                  paddingRight: 3,
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                <a href="#contact" style={anchorStyle}>
                  LET'S DISCUSS
                </a>
              </Button>
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
                <GitHubIcon sx={{ fontSize: 30 }} />
              </IconButton>
              <IconButton color="inherit">
                <LinkedInIcon sx={{ fontSize: 30 }} />
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
      </div>
    </section>
  );
}

export default Landing;
