import React from "react";
import "../Footer/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";
import BasicForm from "./BasicForm";
import Details from "./Details";
import { iconStyling } from "../Landing/Landing";

function Footer(props) {
  return (
    <div className="footer" id="contact">
      <span>
        {props.data.footerheading}
        <br />
        {props.data.footersubheading}
      </span>
      <div className="contact-section">
        <BasicForm basicdata={props.data.basicdata} />
        <Details Mydetails={props.data.Mydetails}/>
      </div>
      <div className="external-links">
        <a
          href={props.data.githublink}
          target="_blank"
          rel="noreferrer"
          style={iconStyling}
        >
          <Button
            startIcon={<GitHubIcon />}
            size="large"
            color="inherit"
            className="responsive-buttons"
          />
        </a>
        <a
          href={props.data.linkedinProfile}
          target="_blank"
          rel="noreferrer"
          style={iconStyling}
        >
          <Button
            startIcon={<LinkedInIcon />}
            size="large"
            color="inherit"
            className="responsive-buttons"
          />
        </a>
      </div>
      <div className="final-button">
        <Button variant="text">
          <a href="#home" rel="noreferrer" style={{ textDecoration: "none" }}>
            {props.data.scrollAction}
          </a>
        </Button>
      </div>
      <div className="external-links copyrights">
        <div>{props.data.Copyrights} </div>
      </div>
    </div>
  );
}

export default Footer;
