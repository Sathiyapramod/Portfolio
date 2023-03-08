import React from "react";
import "../Footer/Footer.css";
import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function BasicForm(props) {
  return (
    <div>
      <Paper
        sx={{
          width: { sx: 250, md: 350 },
          padding: 5,
        }}
        elevation={6}
        className="basicform"
      >
        <form className="d-flex flex-column gap-3">
          <div className="d-flex flex-row gap-3 align-items-center">
            <TextField
              variant="standard"
              label={props.basicdata.formdata.name}
              size="small"
              fullWidth
            />
          </div>
          <div className="d-flex flex-row gap-3 align-items-center">
            <TextField
              variant="standard"
              label={props.basicdata.formdata.email}
              size="small"
            />
          </div>
          <div className="d-flex flex-row gap-3 align-items-center">
            <TextField
              variant="standard"
              label={props.basicdata.formdata.message}
              multiline
              rows={4}
              fullWidth
            />
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
              {props.basicdata.formAction}
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default BasicForm;
