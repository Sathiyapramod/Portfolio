import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Footer/Footer.css";
import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function BasicForm(props) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  };

  const [dataSent, setStatus] = useState(false);

  const handleSubmission = () => {
    setStatus(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setStatus(false);
  };

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
        <form
          className="d-flex flex-column gap-3"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="d-flex flex-row gap-3 align-items-center">
            <TextField
              variant="standard"
              name="user_name"
              label={props.basicdata.formdata.name}
              size="small"
              fullWidth
            />
          </div>
          <div className="d-flex flex-row gap-3 align-items-center">
            <TextField
              variant="standard"
              name="user_email"
              label={props.basicdata.formdata.email}
              size="small"
            />
          </div>
          <div className="d-flex flex-row gap-3 align-items-center">
            <TextField
              variant="standard"
              name="user_message"
              label={props.basicdata.formdata.message}
              multiline
              rows={4}
              fullWidth
            />
          </div>
          <div>
            <Button
              variant="contained"
              type="submit"
              value="Send"
              color="primary"
              onClick={handleSubmission}
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
            <Snackbar
              open={dataSent}
              autoHideDuration={5000}
              onClose={handleClose}
              
            >
              <Alert
                onClose={handleClose}
                variant="filled"
                severity="success"
                sx={{ width: "100%" }}
              >
                E-mail Sent Successfully
              </Alert>
            </Snackbar>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default BasicForm;
