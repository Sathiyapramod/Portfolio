import React from "react";
import "../Footer/Footer.css";
import Button from "@mui/material/Button";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

function BasicDetails(props) {
  const anchorstyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <div>
      <div className="resume-link">
        <div className="contact-details">
          <label>
            <EmailIcon />
          </label>
          <span className="email">
            <a
              href="mailto:sathiyapramod22@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              {props.Mydetails.myemailId}
            </a>
          </span>
        </div>
        <div className="contact-details">
          <label>
            <PhoneInTalkIcon />
          </label>
          <span>
            <a href="tel:+919597097508">{props.Mydetails.myphoneNo}</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BasicDetails;
