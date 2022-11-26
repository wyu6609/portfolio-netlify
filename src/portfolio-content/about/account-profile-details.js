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
        subheader="Software Engineer"
        title="Fullstack Developer"
      />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Typography align="left" variant="body2">
              I am a passionate and highly motivated full stack developer with
              experience using frontend and backend technologies such as
              JavaScript, ReactJS, Bootstrap, Material-UI, Node, Ruby, Sinatra,
              and Rails. I love to build new projects and debugging. I am also
              committed to writing clean, readable and scalable code!<br></br>
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
            props.btnSound();
            props.setSelectedIndex(1);
          }}
        >
          See My Projects!
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
            My GitHub <GitHubIcon fontSize="large" />
          </Button>
        </a>
      </Box>
    </Card>
  );
};
