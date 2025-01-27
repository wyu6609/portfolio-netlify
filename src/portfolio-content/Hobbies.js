import React, { useState } from "react";
import "./Hobbies.css";
import { Document, Page } from "react-pdf";
import resume from "./Resume.pdf";
import resumePDF from "./Resume.pdf";
import { Grid, Paper } from "@mui/material";
import {
  Typography,
  Container,
  Card,
  CardActions,
  CardContent,
  Box,
} from "@mui/material";

import "./Resume.css";
const Hobbies = () => {
  return (
    <Container
      sx={{
        pb: 3,
        alignItems: "center",
        backgroundColor: "#eaeff1",
        border: "none",
      }}
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14, fontWeight: "bold" }}
            color="text.secondary"
            gutterBottom
          >
            January 20 2024 at 1:15 PM
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Algorithms
          </Typography>
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/mRS7GluvBLo?rel=0&autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style={{
                borderRadius: "15px", // Add rounded corners
                border: "2px solid #000", // Optional: Add a border for visibility
              }}
            ></iframe>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Card sx={{ minWidth: 275, mt: 2 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14, fontWeight: "bold" }}
            color="text.secondary"
            gutterBottom
          >
            March 6 2023 at 4:40 PM
          </Typography>
          Nocturne
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/DBpKZhytozs?rel=0&autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style={{
                borderRadius: "15px", // Add rounded corners
                border: "2px solid #000", // Optional: Add a border for visibility
              }}
            ></iframe>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      <Card sx={{ minWidth: 275, mt: 2 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14, fontWeight: "bold" }}
            color="text.secondary"
            gutterBottom
          >
            August 20 2022 at 5:20 PM
          </Typography>
          <Box
            component="image"
            class="tenor-gif-embed"
            src="https://tenor.com/view/do-not-touch-it-programmer-walking-cow-coding-gif-17252607"
            data-postid="17252607"
            data-share-method="host"
            data-aspect-ratio="1.15942"
            data-width="50%"
            width="560"
            height="315"
            sx={{
              borderRadius: "50%", // Makes the border round
              overflow: "hidden", // Ensures the content stays within the round border
              border: "2px solid #ccc", // Optional: adds a border for better visibility
            }}
          >
            <a href="https://tenor.com/view/do-not-touch-it-programmer-walking-cow-coding-gif-17252607">
              Do Not Touch It
            </a>
          </Box>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Container>
  );
};

export default Hobbies;
