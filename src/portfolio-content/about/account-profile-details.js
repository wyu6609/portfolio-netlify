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
    <Card>
      <CardHeader
        sx={{ justifyContent: "center" }}
        subheader="Backend Software Engineer @ JP Morgan & Chase"
        title="Fullstack Developer"
      />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Typography align="middle" variant="body">
              I am a passionate and highly motivated full stack developer with
              experience using Java, Spring, JavaScript, NodeJS, ReactJS,
              Material-UI, Ruby, Ruby on Rails and Git. I love to build new
              projects and debugging. I am also committed to writing clean,
              readable and scalable code!<br></br>
              <br></br>I graduated from New York University, where I received my
              bachelor’s degree in chemical engineering and immersed myself in
              mathematics, physics and engineering. I found my love for coding
              after college.
              <br></br>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <Box
        sx={{
          display: "flex",
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
      </Box>
    </Card>
  );
};
