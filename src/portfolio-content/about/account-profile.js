import React, { useRef, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  Link,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import { AccountProfileDetails } from "./account-profile-details";
import Modal from "@mui/material/Modal";

const user = {
  avatar: "../../images/avatar.png",
  skills:
    "Java | Spring | JavaScript | ReactJS | NodeJS | Ruby | Rails | Git | CICD",
  jobTitle: "Software Engineer I",
  name: "William Yu",
  skills2: "Material-UI | BootStrap | SQL | AWS",
};

export const AccountProfile = (props) => {
  const detailsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (detailsRef.current) {
      observer.observe(detailsRef.current);
    }

    return () => {
      if (detailsRef.current) {
        observer.unobserve(detailsRef.current);
      }
    };
  }, []);

  // Load LinkedIn badge script when modal opens
  useEffect(() => {
    if (open) {
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [open]);

  return (
    <Card {...props} sx={{ backgroundColor: "#ffffff" }}>
      <CardContent>
        <Card>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
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
            <Typography color="primary.main" gutterBottom variant="h4">
              {user.name}
            </Typography>
            <Typography color="textSecondary" align="center" variant="body2">
              {`${user.skills} `}
            </Typography>
            <Typography
              align="center"
              justifyContent="center"
              color="textSecondary"
              variant="body2"
            >
              {user.skills2}
            </Typography>
            {/* Modal for LinkedIn Badge now triggered by LinkedIn icon button */}
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby="linkedin-badge-modal"
              aria-describedby="linkedin-badge-modal-description"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 2,
                  outline: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  className="badge-base LI-profile-badge"
                  data-locale="en_US"
                  data-size="large"
                  data-theme="light"
                  data-type="HORIZONTAL"
                  data-vanity="will-yu-56b101a8"
                  data-version="v1"
                ></div>
              </Box>
            </Modal>
            {/* End LinkedIn Badge Modal */}
            {/* Social Buttons Row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                mt: 3,
                mb: 2,
                px: 2,
                py: 1.5,
                background: "rgba(245, 247, 250, 0.85)",
                borderRadius: 3,
                boxShadow: 1,
                alignItems: "center",
                width: { xs: "100%", sm: "auto" },
                maxWidth: 340,
                alignSelf: "center",
              }}
            >
              <Button
                onClick={() => setOpen(true)}
                sx={{
                  minWidth: 56,
                  minHeight: 56,
                  borderRadius: "50%",
                  color: "#0a66c2",
                  background: "#eaf4fc",
                  boxShadow: 1,
                  "&:hover": { bgcolor: "#d0e8fa", color: "#004182" },
                  transition: "all 0.2s",
                }}
              >
                <LinkedInIcon fontSize="large" />
              </Button>
              <Button
                component={Link}
                href="https://github.com/wyu6609"
                target="_blank"
                sx={{
                  minWidth: 56,
                  minHeight: 56,
                  borderRadius: "50%",
                  color: "#24292f",
                  background: "#f6f8fa",
                  boxShadow: 1,
                  "&:hover": { bgcolor: "#e1e4e8", color: "#000" },
                  transition: "all 0.2s",
                }}
              >
                <GitHubIcon fontSize="large" />
              </Button>
              <Button
                component={Link}
                href="https://docs.google.com/document/d/1yT5g5qLfffm5N2rtVY4ryuQgEpu9_L9wLoU5pW948E8/edit?usp=sharing"
                target="_blank"
                sx={{
                  minWidth: 56,
                  minHeight: 56,
                  borderRadius: "50%",
                  color: "#d2691e",
                  background: "#fff3e0",
                  boxShadow: 1,
                  "&:hover": { bgcolor: "#ffe0b2", color: "#a0522d" },
                  transition: "all 0.2s",
                }}
              >
                <ArticleIcon fontSize="large" />
              </Button>
            </Box>
          </Box>
          <Typography
            sx={{ mt: 2 }}
            variant="body2"
            color="primary.main"
            align="center"
          ></Typography>
        </Card>
        <Divider sx={{ m: 2 }} />
        <div
          ref={detailsRef}
          style={{
            opacity: isVisible ? 1 : 0.5,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <AccountProfileDetails {...props} />
        </div>
      </CardContent>
      <Divider />
    </Card>
  );
};
