import React from "react";
import "../Footer/Footer.css";
import Button from "@mui/material/Button";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";

function BasicForm() {
  const anchorstyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <div>
      <div className="resume-link">
        <div className="contact-details">
          <label>E-mail:</label>
          <span className="email">
            <a href="mailto:sathiyapramod22@gmail.com" rel="noreferrer" target="_blank">sathiyapramod22@gmail.com</a>
          </span>
        </div>
        <div className="contact-details">
          <label>Mobile No.</label>
          <span>
            <a href="tel:+919597097508">+91 9597097508</a>
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
              href="https://drive.google.com/file/d/187rWKJAEbMEIKVyKtjb87PwwRl1QDyxc/view?usp=share_link"
              target="_blank"
              style={anchorstyle}
              rel="noreferrer"
              download
            >
              <DownloadForOfflineOutlinedIcon /> DOWNLOAD RESUME
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BasicForm;
