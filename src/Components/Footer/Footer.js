import React from "react";
import "../Footer/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { githubLink, twitterLink, linkedinLink } from "../Navbar/general";
import { Button } from "@mui/material";
import BasicForm from "./BasicForm";
import Details from './Details';

function Footer() {
  return (
    <div className="footer" id="contact">
      <span>
        Networking is always Good <br />
        Share you feedback below
      </span>
      <div className="d-flex flex-row justify-content-center align-items-center gap-3">
        <BasicForm />
        <Details />
      </div>
      <div className="external-links">
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="menu-links"
        >
          <Button
            startIcon={<GitHubIcon />}
            size="large"
            color="inherit"
            className="responsive-buttons"
          />
        </a>
        <a
          href={linkedinLink}
          target="_blank"
          rel="noreferrer"
          className="menu-links"
        >
          <Button
            startIcon={<TwitterIcon />}
            size="large"
            color="inherit"
            className="responsive-buttons"
          />
        </a>
        <a
          href={twitterLink}
          target="_blank"
          rel="noreferrer"
          className="menu-links"
        >
          <Button
            startIcon={<LinkedInIcon />}
            size="large"
            color="inherit"
            className="responsive-buttons"
          />
        </a>
      </div>
      <div className="external-links copyrights">
        <div> Made by Sathiyapramod with 😊 | 2023 | All Rights Reserved </div>
      </div>
    </div>
  );
}

export default Footer;
