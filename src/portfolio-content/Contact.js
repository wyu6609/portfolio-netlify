import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const sentSound = () => {
  let sentAudio = new Audio("/sounds/sent.mp3");
  sentAudio.play();
};

export default function Contact({ btnSound }) {
  const navigate = useNavigate();
  const form = React.useRef();
  const [emailAddress, setEmailAddress] = React.useState();
  const [formMessage, setFormMessage] = React.useState();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t9roolf",
        "template_xwgfxun",
        e.target,
        "2DPcLjKjvPiBDX_s5"
      )
      .then(
        (result) => {
          console.log(result.text);
          sentSound();
          toast.success(`Message successfully sent!`, {
            theme: "colored",
            position: "top-center",
            autoClose: 800,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error(`Message failed to send!`, {
            theme: "colored",
            position: "top-center",
            autoClose: 800,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
        }
      );

    e.target.reset();
  };

  return (
    <Grid container align="center" className="aboutContainer">
      <Grid item xs={12} sm={12} md={12}>
        <div className="marquee2">
          <Box
            sx={{
              my: 10,
              mx: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <EmailIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ mb: 5 }}>
              Leave me a message!
            </Typography>
            <Box
              component="form"
              ref={form}
              onSubmit={sendEmail}
              noValidate
              //   onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="email address"
                name="email"
                autoFocus
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="message"
                label="message me"
                type="message"
                id="message"
                onChange={(e) => {
                  setFormMessage(e.target.value);
                }}
                multiline
                rows={5}
              />

              <Button
                onClick={() => {
                  btnSound();
                }}
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!emailAddress || !formMessage}
              >
                Send your message!
              </Button>
            </Box>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
