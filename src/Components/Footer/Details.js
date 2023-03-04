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
        <div className="resume-button">
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#756BEE",
              fontWeight: 500,
              paddingLeft: { xs: 2, sm: 3 },
              paddingRight: { xs: 2, sm: 3 },
              "&:hover": {
                backgroundColor: "black",
              },
            }}
          >
            <a
              href={props.Mydetails.myResumeLink}
              target="_blank"
              style={anchorstyle}
              rel="noreferrer"
              download
            >
              <DownloadForOfflineOutlinedIcon />{" "}
              {props.Mydetails.visitorAction1}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BasicDetails;
