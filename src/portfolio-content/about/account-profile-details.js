import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const CARD_BORDER_COLOR = "#e0e0e0";
const LINKEDIN_COLOR = "#0a66c2";
const GITHUB_COLOR = "#24292f";
const ARTICLE_COLOR = "#d2691e";

export const AccountProfileDetails = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundColor: "rgba(245, 247, 250, 0.85)",
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
          position: "relative",
        }}
        onClick={() => setExpanded((prev) => !prev)}
        subheader={
          <>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ color: GITHUB_COLOR, fontWeight: 500 }}
            >
              Backend Software Engineer @ JP Morgan & Chase
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                mt: 1,
              }}
            >
              <Button
                aria-label="Projects"
                color="primary"
                variant="contained"
                onClick={() => (window.location.href = "/projects")}
                sx={{
                  minWidth: 56,
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
                aria-label="Blog"
                color="primary"
                variant="contained"
                onClick={() => (window.location.href = "/blog")}
                sx={{
                  minWidth: 56,
                  height: 56,
                  borderRadius: "50%",
                  color: ARTICLE_COLOR,
                  background: "#fff3e0",
                  boxShadow: 1,
                  fontWeight: 600,
                  fontSize: 24,
                  p: 0,
                  "&:hover": { bgcolor: "#ffe0b2", color: "#b26a00" },
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                📝
              </Button>
              <Button
                aria-label="LinkedIn"
                color="primary"
                variant="contained"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/will-yu-56b101a8/",
                    "_blank"
                  )
                }
                sx={{
                  minWidth: 56,
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
                <LinkedInIcon fontSize="large" />
              </Button>
            </Box>
          </>
        }
        title={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              position: "relative",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: 1,
                flex: 1,
              }}
            >
              Fullstack Developer
            </Typography>
            <ExpandMoreIcon
              sx={{
                ml: 1,
                transition: "transform 0.2s",
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                color: "primary.main",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setExpanded((prev) => !prev);
              }}
            />
          </Box>
        }
      />
      <CardContent
        sx={{
          pt: 1,
          backgroundColor: "rgba(245, 247, 250, 0.85)",
          textAlign: "center",
        }}
      >
        {expanded && (
          <Box
            sx={{ maxWidth: 480, mx: "auto", width: "100%", mb: 2 }}
          >
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
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default AccountProfileDetails;
