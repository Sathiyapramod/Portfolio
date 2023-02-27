import React from "react";
import "../Footer/Footer.css";
import Button from "@mui/material/Button";

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
            "&:hover": {
              backgroundColor: "black",
              fontWeight: 300,
              paddingLeft: { xs: 1, sm: 3 },
              paddingRight: { xs: 1, sm: 3 },
            },
          }}
        >
          <a
            href="https://drive.google.com/file/d/187rWKJAEbMEIKVyKtjb87PwwRl1QDyxc/view?usp=share_link"
            target="_blank"
            style={anchorstyle}
            download
          >
            GET Resume
          </a>
        </Button>
      </div>
    </div>
  );
}

export default BasicForm;
