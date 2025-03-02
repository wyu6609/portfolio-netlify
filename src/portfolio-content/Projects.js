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
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
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
        backgroundColor: "#eaeff1",
        border: "none",
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
          textDecoration: "none", // Remove underline by default
          transition: "transform 0.3s ease, color 0.3s ease", // Smooth transition for hover effects
          "&:hover": {
            color: "primary.main", // Change text color on hover
            textDecoration: "underline", // Add underline on hover
            cursor: "pointer", // Show pointer cursor
            transform: "scale(1.1)", // Slightly grow the text
          },
        }}
      >
        {" "}
        <Link
          href="https://github.com/wyu6609?tab=repositories"
          target="_blank"
        >
          PROJECTS
        </Link>
      </Typography>
      <Typography
        align="center"
        variant="body2"
        color="#FF0000"
        fontWeight="bold"
        letterSpacing="1px"
        sx={{
          pb: 2,
          alignItems: "center",
          animation: `${bounceAnimation} 0.5s ease-in-out infinite`, // Infinite bounce
        }}
      >
        *HEROKU APPS ARE CURRENTLY DOWN*
      </Typography>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={3}>
            <Link
              href={!card.disabled ? card.link : undefined} // Disable the link if the card is disabled
              underline="none"
              target={!card.disabled ? "_blank" : undefined}
            >
              <Card
                className="fancy_card"
                sx={{
                  alignItems: "center",
                  height: "100%",
                  backgroundColor: card.disabled ? "grey" : "inherit",
                  display: "flex",
                  flexDirection: "column",
                  pointerEvents: card.disabled ? "none" : "auto", // Disable pointer events when the card is disabled
                  "&:hover": {
                    backgroundColor: card.disabled ? "grey" : "white", // Prevent hover effect if disabled
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    mt: 1,
                  }}
                  image={card.img}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h5"
                    component="h6"
                    sx={{ mt: 1 }}
                    color="primary.main"
                    fontWeight="bold"
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    align="center"
                    variant="body2"
                    sx={{ fontSize: 10 }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions>
                  {card.demo ? (
                    <IconButton
                      sx={{
                        "&:hover": {
                          backgroundColor: "#cccccc",
                        },
                      }}
                      onClick={() => {
                        window.open(card.demo, "_blank");
                      }}
                    >
                      <YouTubeIcon
                        sx={{
                          color: "primary.main",
                          fontSize: 30,
                        }}
                      />
                    </IconButton>
                  ) : (
                    <></>
                  )}

                  <IconButton
                    sx={{
                      "&:hover": {
                        backgroundColor: "#cccccc",
                      },
                    }}
                    onClick={() => {
                      window.open(card.git, "_blank");
                    }}
                  >
                    <GitHubIcon
                      sx={{
                        color: "primary.main",
                        fontSize: 30,
                      }}
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
