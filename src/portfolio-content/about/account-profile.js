import React, { useRef, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Link,
  Modal,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CARD_BORDER_COLOR = "#e0e0e0";
const LINKEDIN_COLOR = "#0a66c2";
const GITHUB_COLOR = "#24292f";
const ARTICLE_COLOR = "#d2691e";

const user = {
  avatar: "../../images/avatar.png",
  skills:
    "Java | Spring | JavaScript | ReactJS | NodeJS | Ruby | Rails | Git | CICD",
  jobTitle: "Software Engineer I",
  name: "William Yu",
  skills2: "Material-UI | BootStrap | SQL | AWS",
};

export const AccountProfile = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  // Utility to detect mobile devices
  const isMobile = () => {
    if (typeof navigator === "undefined") return false;
    return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );
  };

  return (
    <Card
      sx={{
        backgroundColor: "#fff",
        borderRadius: 3,
        boxShadow: 3,
        border: `1px solid ${CARD_BORDER_COLOR}`,
        maxWidth: 480,
        mx: "auto",
        mt: 4,
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Avatar
          src="https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/avatar.png?raw=true"
          sx={{
            height: 240,
            mt: 1,
            mb: 4.4,
            width: 240,
            backgroundColor: "#ccc",
          }}
        />
        <Typography
          color="primary.main"
          gutterBottom
          variant="h4"
          fontWeight={700}
          align="center"
          sx={{ background: "#fff", px: 1, borderRadius: 1 }}
        >
          {user.name}
        </Typography>
        <Typography color="textSecondary" align="center" variant="body2">
          {user.skills}
        </Typography>
        <Typography align="center" color="textSecondary" variant="body2">
          {user.skills2}
        </Typography>
      </Box>
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
        subheader={
          <>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ color: GITHUB_COLOR, fontWeight: 500, textAlign: "center" }}
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
                mb: 0,
              }}
            >
              <Button
                className="fancy_card1"
                color="primary"
                variant="contained"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/will-yu-56b101a8/",
                    "_blank"
                  );
                }}
                sx={{
                  minWidth: 0,
                  p: 1.2,
                  borderRadius: "50%",
                  background: "#eaf4fc",
                  color: "#0a66c2",
                }}
              >
                <LinkedInIcon fontSize="large" />
              </Button>
              <Button
                className="fancy_card1"
                color="primary"
                variant="contained"
                onClick={() =>
                  window.open("https://github.com/wyu6609", "_blank")
                }
                sx={{
                  minWidth: 0,
                  p: 1.2,
                  borderRadius: "50%",
                  background: "#f5f5f5",
                  color: "#24292f",
                }}
              >
                <GitHubIcon fontSize="large" />
              </Button>
              <Button
                className="fancy_card1"
                color="primary"
                variant="contained"
                onClick={() => window.open("/resume", "_self")}
                sx={{
                  minWidth: 0,
                  p: 1.2,
                  borderRadius: "50%",
                  background: "#fff3e0",
                  color: "#d2691e",
                }}
              >
                <ArticleIcon fontSize="large" />
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
              mb: 0,
              mt: 0,
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
                mb: 0,
                background: "rgba(245, 247, 250, 0.85)",
                px: 1,
                borderRadius: 1,
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
      <CardContent sx={{ pt: 1, backgroundColor: "#fff", textAlign: "center" }}>
        {expanded && (
          <Box
            sx={{
              maxWidth: 480,
              mx: "auto",
              width: "100%",
              mb: 2,
              mt: 0,
              background: "rgba(245, 247, 250, 0.85)",
              borderRadius: 2,
              p: 2,
            }}
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

export default AccountProfile;
