import React from "react";
import { keyframes } from "@emotion/react";
import {
  Link,
  Container,
  IconButton,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import "./Project.css";
import Glasscard from "./Glasscard.js";

// Define a bounce animation
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const cards = [
  {
    title: "2048",
    description: "Classic 2048, built with REACT and MATERIAL UI",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/2048_app.png?raw=true",
    link: "https://wyu6609.github.io/2048/",
    git: "https://github.com/wyu6609/2048",
    disabled: false,
  },
  {
    title: "Todo",
    description: "Todo app, built with REACT and MATERIAL UI",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/todo_app.png?raw=true",
    link: "https://wyu6609.github.io/todo/",
    git: "https://github.com/wyu6609/todo",
    disabled: false,
  },
  {
    title: "Bot.io 2.0",
    description:
      "A NFT BOT market directory, built with RAILS, REACT and MATERIAL UI",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/bot_io.png?raw=true",
    link: "http://buy-ya-bots.herokuapp.com/",
    git: "https://github.com/wyu6609/bot_io_2.0",
    demo: "https://www.youtube.com/watch?v=IaJeeMGrXWA",
    disabled: true,
  },
  {
    title: "Dream.",
    description: "Log your dreams. See what others are dreaming",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/dream_mockup.png?raw=true",
    link: "https://journal-da-dreams.herokuapp.com/",
    git: "https://github.com/wyu6609/Dream.",
    demo: "https://youtu.be/bSJZU5kbhbM",
    disabled: true,
  },
  {
    title: "The Sneaker Vault",
    description:
      "A simple shoe directory for some of the rarest sneaker collections in hype beast fashion!",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/sneakervault_mockup.png?raw=true",
    link: "https://the-sneaker-vault.herokuapp.com/",
    git: "https://github.com/wyu6609/fire_kicks",
    disabled: true,
  },
  {
    title: "My Pokedex",
    description:
      "A simple and fun Pokedex. Built with React, React-Bootstrap and Axios",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/pokedex_mockup.png?raw=true",
    link: "https://wills-pokedex.netlify.app/",
    git: "https://github.com/wyu6609/my_pokedex",
    demo: "https://www.youtube.com/watch?v=uKP_ogX1fjE",
    disabled: false,
  },
  {
    title: "Adopet",
    description: "Find a pet companion in need around you!",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/adopet_mockup.png?raw=true",
    link: "https://adopet-adopt.netlify.app/adopt",
    git: "https://github.com/wyu6609/Adopet",
    disabled: false,
  },
  {
    title: "Cat Startup",
    description:
      "A startup web site for cat stuff. Meow. Built with React and BootStrap.",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/catstartup_mockup.png?raw=true",
    link: "https://cat-stuff.netlify.app/",
    git: "https://github.com/wyu6609/cat_startup",
    disabled: false,
  },
  {
    title: "WhatsUpp",
    description:
      "Chat app inspired by WhatsApp. Utilizes action cable and web sockets!",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/whatsupp.png?raw=true",
    link: "https://illustrious-longma-22a381.netlify.app/",
    git: "https://github.com/wyu6609/whats-app-clone-frontend",
    demo: "https://www.youtube.com/watch?v=mZKe-pdVhlc",
    disabled: true,
  },
  {
    title: "NYC HEALTH",
    description:
      "Search a NYC restaurant. Visualize the health stats on Google Maps",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/nyc_heath_mockup.png?raw=true",
    link: "https://nyc-health-inspection.netlify.app/",
    git: "https://github.com/wyu6609/NYC-health-inspection",
    demo: "https://www.youtube.com/watch?v=cagxhY3IvwE",
    disabled: false,
  },

  {
    title: "UHungry?",
    description:
      "Hungry? Search an ingredient and see a bunch of random recipes!",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/uhungry_mockup.png?raw=true",
    link: "https://u-hungry.netlify.app/#",
    git: "https://github.com/wyu6609/Phase-2-project-Uhungry",
    demo: "https://www.youtube.com/watch?v=e5IwFGlZJQc&t=1s",
    disabled: false,
  },

  {
    title: "Minimalist Weather",
    description: "Simple and clean weather app. Built with Vanilla JavaScript",
    img: "https://github.com/wyu6609/wyu6609.github.io/blob/main/assets/img/portfolio/project6.png?raw=true",
    link: "https://minimalists-weather.netlify.app/",
    git: "https://github.com/wyu6609/Weather-app",
  },
];
const stackCards = [1, 2, 3, 4];
const Projects = () => {
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
      <Typography
        align="center"
        variant="h4"
        component="h2"
        color="#111827"
        fontWeight="bold"
        letterSpacing="1px"
        sx={{
          py: 2,
          alignItems: "center",
          color: "#111827",
          fontWeight: "bold",
          letterSpacing: "1px",
          textDecoration: "none",
          transition: "transform 0.3s ease, color 0.3s ease",
          "&:hover": {
            color: "primary.main",
            textDecoration: "underline",
            cursor: "pointer",
            transform: "scale(1.1)",
          },
        }}
      >
        <Link
          href="https://github.com/wyu6609?tab=repositories"
          target="_blank"
          underline="none"
          sx={{
            color: "inherit",
            "&:hover": { color: "primary.main" },
          }}
        >
          PROJECTS
        </Link>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(255, 213, 128, 0.25)",
          borderRadius: 3,
          px: 3,
          py: 1.5,
          mb: 3,
          maxWidth: 420,
          mx: "auto",
          boxShadow: 1,
          animation: `${bounceAnimation} 1.2s ease-in-out infinite`,
        }}
      >
        <WarningAmberIcon sx={{ color: "#ff9800", mr: 1, fontSize: 28 }} />
        <Typography
          align="center"
          variant="body1"
          sx={{
            color: "#b26a00",
            fontWeight: 600,
            letterSpacing: "0.5px",
            fontSize: 16,
            userSelect: "none",
          }}
        >
          Heroku-hosted applications are currently down.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {cards.map((card) => (
          <Grid item key={card.title} xs={12} sm={6} md={3}>
            <Card
              className="fancy_card"
              sx={{
                alignItems: "center",
                height: "100%",
                background: card.disabled
                  ? "linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)"
                  : "rgba(255,255,255,0.95)",
                borderRadius: 4,
                boxShadow: card.disabled ? 0 : 4,
                display: "flex",
                flexDirection: "column",
                pointerEvents: card.disabled ? "none" : "auto",
                opacity: card.disabled ? 0.7 : 1,
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: card.disabled ? "default" : "pointer",
                position: "relative",
                "&:hover": {
                  boxShadow: card.disabled ? 0 : 8,
                  transform: card.disabled ? "none" : "scale(1.03)",
                  background: card.disabled
                    ? "linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)"
                    : "#fff",
                },
              }}
              onClick={(e) => {
                // Prevent card click if clicking on an action button
                if (
                  e.target.closest(".MuiIconButton-root") ||
                  card.disabled ||
                  !card.link
                ) {
                  return;
                }
                window.open(card.link, "_blank");
              }}
              tabIndex={card.disabled ? -1 : 0}
              aria-disabled={card.disabled}
              role="button"
            >
              <CardMedia
                component="img"
                sx={{
                  mt: 2,
                  borderRadius: 3,
                  boxShadow: 2,
                  width: "90%",
                  maxHeight: 140,
                  objectFit: "cover",
                  mx: "auto",
                }}
                image={card.img}
                alt={card.title}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  width: "100%",
                  px: 2,
                  pt: 2,
                  pb: 1,
                }}
              >
                <Typography
                  align="center"
                  gutterBottom
                  variant="h6"
                  component="h6"
                  sx={{
                    mt: 1,
                    fontWeight: 700,
                    color: "primary.main",
                    letterSpacing: 1,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  sx={{ fontSize: 12, color: "#444", mb: 1 }}
                >
                  {card.description}
                </Typography>
              </CardContent>
              <Divider sx={{ width: "80%", mx: "auto", mb: 1 }} />
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                {card.demo && (
                  <IconButton
                    sx={{
                      background: "#eaf4fc",
                      borderRadius: "50%",
                      mx: 1,
                      boxShadow: 1,
                      "&:hover": {
                        backgroundColor: "#d0e8fa",
                        transform: "scale(1.1)",
                      },
                      transition: "all 0.2s",
                    }}
                    onClick={() => {
                      window.open(card.demo, "_blank");
                    }}
                  >
                    <YouTubeIcon
                      sx={{
                        color: "#e53935",
                        fontSize: 30,
                      }}
                    />
                  </IconButton>
                )}
                <IconButton
                  sx={{
                    background: "#f6f8fa",
                    borderRadius: "50%",
                    mx: 1,
                    boxShadow: 1,
                    "&:hover": {
                      backgroundColor: "#e1e4e8",
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.2s",
                  }}
                  onClick={() => {
                    window.open(card.git, "_blank");
                  }}
                >
                  <GitHubIcon
                    sx={{
                      color: "#24292f",
                      fontSize: 30,
                    }}
                  />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
