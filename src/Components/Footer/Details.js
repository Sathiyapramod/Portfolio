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
            <DownloadForOfflineOutlinedIcon />
            DOWNLOAD RESUME
          </a>
        </Button>
      </div>
    </div>
  );
}

export default BasicForm;
