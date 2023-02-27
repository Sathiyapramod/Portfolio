import React from "react";
import "../Footer/Footer.css";
import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function BasicForm() {
  return (
    <div>
      <Paper
        sx={{
          width: { sx: 250, md: 450 },
          paddingTop: 5,
          paddingBottom: 5,
        }}
        elevation={6}
        className="basicform"
      >
        <form className="d-flex flex-column gap-3">
          <div className="d-flex flex-row gap-3 align-items-center">
            <label className="form-label col-3">Name</label>
            <input type="text" className="form-control me-2"></input>
          </div>
          <div className="d-flex flex-row gap-3 align-items-center">
            <label className="form-label col-3">Email-Id</label>
            <input type="text" className="form-control me-2"></input>
          </div>
          <div className="d-flex flex-row gap-3 align-items-center">
            <label className="form-label col-3">Message</label>
            <textarea type="text" className="form-control me-2" rows="4" cols="4"/>
          </div>
          <div>
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
              Send Feedback
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default BasicForm;
