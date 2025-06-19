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
            <Typography color="textPrimary" gutterBottom variant="h4">
              {user.name}
            </Typography>
            {/* LinkedIn Badge Button */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 1,
                mb: 2,
                alignSelf: "center",
                px: 4,
                py: 1.2,
                fontWeight: 600,
                fontSize: "1rem",
                borderRadius: 3,
                boxShadow: 2,
                letterSpacing: 1,
                transition: "background 0.2s, transform 0.2s",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => setOpen(true)}
            >
              View LinkedIn Badge
            </Button>
            {/* Modal for LinkedIn Badge */}
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
            {/* Social Buttons Row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mt: 2,
                mb: 1,
              }}
            >
              <Button
                component={Link}
                href="https://www.linkedin.com/in/will-yu-56b101a8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3IFmW0pcQTeRea%2FmutKVsw%3D%3D"
                target="_blank"
                sx={{
                  minWidth: 48,
                  color: "#0a66c2",
                  "&:hover": { bgcolor: "#eaf4fc" },
                }}
              >
                <LinkedInIcon fontSize="large" />
              </Button>
              <Button
                component={Link}
                href="https://github.com/wyu6609"
                target="_blank"
                sx={{
                  minWidth: 48,
                  color: "#24292f",
                  "&:hover": { bgcolor: "#f6f8fa" },
                }}
              >
                <GitHubIcon fontSize="large" />
              </Button>
              <Button
                component={Link}
                href="https://docs.google.com/document/d/1yT5g5qLfffm5N2rtVY4ryuQgEpu9_L9wLoU5pW948E8/edit?usp=sharing"
                target="_blank"
                sx={{
                  minWidth: 48,
                  color: "#d2691e",
                  "&:hover": { bgcolor: "#fff3e0" },
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
