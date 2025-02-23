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
            <Typography align="inherit" variant="body2">
              I am a passionate, results-driven backend software engineer
              specializing in building scalable, high-performance systems. My
              technical expertise centers on Java and Spring Boot, complemented
              by strong proficiency in JavaScript, Node.js, React.js,
              Material-UI, Ruby, and Ruby on Rails. I excel at solving complex
              challenges, debugging with precision, and writing clean,
              maintainable code. Currently, I work as a software engineer at
              JPMorgan Chase, focusing on backend Java development and AWS.
              <br></br>
            </Typography>
          </Grid>
        </Grid>
        <Typography
          sx={{ mt: 2 }}
          variant="body2"
          color="primary.main"
          align="left"
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
          <Button
            // component={Link}
            // to="/projects"
            className="fancy_card1"
            color="primary"
            variant="contained"
            onClick={() => {
              window.location.href = "/blog";
            }}
            sx={{ ml: 1 }}
          >
            blog 📹
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
