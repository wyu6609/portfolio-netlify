import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
export const AccountProfileDetails = (props) => {
  return (
    <Card {...props}>
      <CardHeader
        sx={{ justifyContent: "center" }}
        subheader="Backend Software Engineer @ JP Morgan & Chase"
        title="Fullstack Developer"
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ maxWidth: "100%", overflow: "hidden" }}
        >
          <Grid item md={12} xs={12}>
            <Typography align="justify" variant="body2">
              I am a passionate and results-driven backend software engineer
              over 2 years of experience at JPMorgan Chase, specializing in
              developing scalable, high-performance systems. My technical
              expertise includes Java and Spring Boot, complemented by strong
              proficiency in JavaScript, Node.js, React.js, Material-UI, Ruby,
              and Ruby on Rails. I thrive on solving complex challenges,
              debugging effectively, and writing clean, maintainable code.
              <br></br>
            </Typography>
          </Grid>
        </Grid>
        <Typography
          sx={{ mt: 2 }}
          variant="body2"
          color="primary.main"
          align="center"
        >
          <Button
            // component={Link}
            // to="/projects"
            className="fancy_card1"
            color="primary"
            variant="contained"
            onClick={() => {
              window.location.href = "/projects";
            }}
          >
            projects 💻
          </Button>
        </Typography>
      </CardContent>

      {/* <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: { xs: "center", sm: "flex-start" },
          p: 2,
        }}
      >
        <Button
          // component={Link}
          // to="/projects"
          className="fancy_card1"
          color="primary"
          variant="contained"
          onClick={() => {
            props.navigate("/projects");
            window.scrollTo(0, 0);
            props.btnSound();
            props.setSelectedIndex(1);
          }}
        >
          PROJECTS 💻
        </Button>

        <a
          style={{ textDecoration: "none" }}
          href="https://github.com/wyu6609"
          target="_blank"
        >
          <Button
            className="fancy_card1"
            sx={{ mx: 4 }}
            // component={Link}
            // to="/projects"

            color="primary"
            variant="contained"
            onClick={() => {
              props.btnSound();
            }}
          >
            GITHUB 🖥
            <span style={{ marginLeft: "8px" }} />
            <GitHubIcon fontSize="large" />
          </Button>
        </a>

        <Button
          // component={Link}
          // to="/projects"
          className="fancy_card1"
          color="primary"
          variant="contained"
          onClick={() => {
            props.navigate("/blog");
            props.btnSound();
            props.setSelectedIndex(3);
          }}
        >
          BLOG 📹
        </Button>
      </Box> */}
    </Card>
  );
};
