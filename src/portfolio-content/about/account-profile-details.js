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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";

// Color palette matching AccountProfile social buttons
const CARD_BORDER_COLOR = "#e0e0e0"; // matches MUI default card border
const LINKEDIN_COLOR = "#0a66c2";
const GITHUB_COLOR = "#24292f";
const ARTICLE_COLOR = "#d2691e";

export const AccountProfileDetails = (props) => {
  return (
    <Card
      {...props}
      sx={{
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: 1,
        border: `1px solid ${CARD_BORDER_COLOR}`,
        maxWidth: 480,
        mx: "auto",
        mt: 3,
      }}
    >
      <CardHeader
        sx={{
          justifyContent: "center",
          background: "rgba(245, 247, 250, 0.85)",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          mb: 1,
          px: 2,
        }}
        subheader={
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: GITHUB_COLOR, fontWeight: 500 }}
          >
            Backend Software Engineer @ JP Morgan & Chase
          </Typography>
        }
        title={
          <Typography
            variant="h5"
            align="center"
            sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 1 }}
          >
            Fullstack Developer
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ justifyContent: "center" }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, width: "100%", textAlign: "center" }}
            >
              About Me
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ maxWidth: 480, mx: "auto", width: "100%" }}>
            <Typography
              align="inherit"
              variant="body2"
              sx={{
                fontSize: 18,
                color: "#333",
                mb: 2,
                wordBreak: "break-word",
                whiteSpace: "pre-line",
                textAlign: "left",
              }}
            >
              I am a passionate, results-driven backend software engineer
              specializing in building scalable, high-performance systems. My
              technical expertise centers on Java and Spring Boot, complemented
              by strong proficiency in JavaScript, Node.js, React.js,
              Material-UI, Ruby, and Ruby on Rails. I excel at solving complex
              challenges, debugging with precision, and writing clean,
              maintainable code. Currently, I work as a software engineer at
              JPMorgan Chase, focusing on backend Java development and AWS.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mt: 3,
            mb: 2,
            px: 0,
            py: 0,
            background: "none",
            borderRadius: 0,
            boxShadow: "none",
            alignItems: "center",
            width: "100%",
            maxWidth: 340,
            alignSelf: "center",
            mx: "auto",
          }}
        >
          <Button
            className="fancy_card1"
            color="primary"
            variant="contained"
            onClick={() => {
              window.location.href = "/projects";
            }}
            sx={{
              minWidth: 56,
              minHeight: 56,
              width: 56,
              height: 56,
              borderRadius: "50%",
              color: LINKEDIN_COLOR,
              background: "#eaf4fc",
              boxShadow: 1,
              fontWeight: 600,
              fontSize: 24,
              p: 0,
              "&:hover": { bgcolor: "#d0e8fa", color: "#004182" },
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            💻
          </Button>
          <Button
            className="fancy_card1"
            color="primary"
            variant="contained"
            onClick={() => {
              window.location.href = "/blog";
            }}
            sx={{
              minWidth: 56,
              minHeight: 56,
              width: 56,
              height: 56,
              borderRadius: "50%",
              color: ARTICLE_COLOR,
              background: "#fff3e0",
              boxShadow: 1,
              fontWeight: 600,
              fontSize: 24,
              p: 0,
              ml: 1,
              "&:hover": { bgcolor: "#ffe0b2", color: "#a0522d" },
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            📹
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
