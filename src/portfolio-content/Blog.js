import React, { useState } from "react";
import "./Blog.css";
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
const Blog = () => {
  return (
    <Container
      sx={{
        pb: 3,
        alignItems: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #e3e9f3 100%)",
        border: "none",
        borderRadius: 5,
        boxShadow: 6,
        minWidth: { xs: "100%", sm: 0 },
        pt: 4,
      }}
    >
      {/* Blog Cards */}
      {[
        {
          date: "January 20 2024 at 1:15 PM",
          tag: "Algorithms",
          src: "https://www.youtube-nocookie.com/embed/mRS7GluvBLo?rel=0&autoplay=1",
        },
        {
          date: "July 15 2023 at 12:55 PM",
          tag: "Nocturne",
          src: "https://www.youtube-nocookie.com/embed/DBpKZhytozs?rel=0&autoplay=1",
        },
        {
          date: "March 6 2023 at 1:25 PM",
          tag: "Iphone 16 Pro Cam Zoom📷",
          src: "https://www.youtube-nocookie.com/embed/Yn7W7wdY7I8?rel=0&autoplay=1",
        },
        {
          date: "February 12 2023 at 11:15 PM",
          tag: "Cruising down to NY",
          src: "https://www.youtube-nocookie.com/embed/dH8WjfOkmZo?rel=0&autoplay=1",
        },
      ].map((item, idx) => (
        <Card
          key={item.date}
          sx={{
            minWidth: 275,
            mt: idx === 0 ? 0 : 3,
            borderRadius: 4,
            boxShadow: 4,
            background: "rgba(255,255,255,0.95)",
            px: 2,
            py: 1,
            maxWidth: 700,
            mx: "auto",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                color: "black",
                mb: 0.5,
              }}
              gutterBottom
            >
              {item.date}
            </Typography>
            <Typography
              sx={{ mb: 1.5, fontWeight: 500, color: "primary.main" }}
            >
              {item.tag}
            </Typography>
            <Box
              className="iframe-container"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                component="iframe"
                width="100%"
                height="340"
                src={item.src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                sx={{
                  borderRadius: 3,
                  border: "2px solid #e3e9f3",
                  boxShadow: 2,
                  maxWidth: 560,
                  minHeight: 200,
                  background: "#000",
                }}
              />
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Blog;
