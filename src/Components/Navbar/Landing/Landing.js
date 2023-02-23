import React from "react";
import "../Landing/Landing.css";
import profile from "../../../assets/profile.jpeg";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaquery from "../../../Hooks/useMediaquery";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Landing({ setSelectedPage }) {
  const isDesktop = useMediaquery("(min-width:768px)");
  //   console.log(isDesktop);
  return (
    <section>
      <div className="landing">
        <div className="landing-content">
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
            <span className="name">Sathiyapramod</span>
          </motion.div>
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
              player !! Presently focussed on Seeking Jobs on Web Developer ,
              blended with knowledge of Front-end and NodeJS elements{" "}
            </span>
          </motion.div>
          <span>
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
              <AnchorLink
                className="menu-links"
                href="#contact"
                onClick={() => {
                  setSelectedPage("contact");
                }}
              >
                <Button
                  variant="outlined"
                  sx={{ fontSize: isDesktop ? 18 : 12 }}
                >
                  Let us discuss
                </Button>
              </AnchorLink>
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
              <IconButton color="inherit" sx={{ fontSize: 30 }}>
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit" sx={{ fontSize: 30 }}>
                <LinkedInIcon />
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
            <img src={profile} width="350" height="450" alt="profile" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
