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
          </Box>
          <Typography
            sx={{ mt: 2 }}
            variant="body2"
            color="primary.main"
            align="center"
          >
            <Link
              href="https://www.linkedin.com/in/will-yu-56b101a8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3IFmW0pcQTeRea%2FmutKVsw%3D%3D"
              target="_blank"
            >
              <LinkedInIcon className="fancy_card1" fontSize="large" />
            </Link>
            <Link
              href="https://github.com/wyu6609"
              target="_blank"
              sx={{ p: 0.5 }}
            >
              <GitHubIcon className="fancy_card1" fontSize="large" />
            </Link>
            <Link
              href="https://docs.google.com/document/d/1yT5g5qLfffm5N2rtVY4ryuQgEpu9_L9wLoU5pW948E8/edit?usp=sharing"
              target="_blank"
              sx={{ p: 0.5 }}
            >
              <ArticleIcon className="fancy_card1" fontSize="large" />
            </Link>
          </Typography>
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
