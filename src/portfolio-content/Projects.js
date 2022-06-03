import React from "react";
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

const cards = [
  {
    title: "Bot.io 2.0",
    description:
      "A fictional NFT BOT market, built with RAILS, REACT and MATERIAL UI",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/bot_io.png?raw=true",
    link: "http://buy-ya-bots.herokuapp.com/",
    git: "https://github.com/wyu6609/bot_io_2.0",
    demo: "https://www.youtube.com/watch?v=IaJeeMGrXWA",
  },
  {
    title: "WhatsUpp",
    description:
      "Chat app inspired by WhatsApp. Utilizes action cable and web sockets!",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/whatsupp.png?raw=true",
    link: "https://illustrious-longma-22a381.netlify.app/",
    git: "https://github.com/wyu6609/whats-app-clone-frontend",
    demo: "https://www.youtube.com/watch?v=mZKe-pdVhlc",
  },
  {
    title: "NYC HEALTH",
    description:
      "Search a NYC restaurant. Visualize the health stats on Google Maps",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/nyc_heath_mockup.png?raw=true",
    link: "https://nyc-health-inspection.netlify.app/",
    git: "https://github.com/wyu6609/NYC-health-inspection",
    demo: "https://www.youtube.com/watch?v=cagxhY3IvwE",
  },

  {
    title: "UHungry?",
    description:
      "Hungry? Search an ingredient and see a bunch of random recipes!",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/uhungry_mockup.png?raw=true",
    link: "https://u-hungry.netlify.app/#",
    git: "https://github.com/wyu6609/Phase-2-project-Uhungry",
    demo: "https://www.youtube.com/watch?v=e5IwFGlZJQc&t=1s",
  },
  {
    title: "Dream.",
    description: "Log your dreams. See what others are dreaming",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/dream_mockup.png?raw=true",
    link: "https://journal-da-dreams.herokuapp.com/",
    git: "https://github.com/wyu6609/Dream.",
  },
  {
    title: "Minimalist Weather",
    description: "Simple and clean weather app. Built with Vanilla JavaScript",
    img: "https://github.com/wyu6609/wyu6609.github.io/blob/main/assets/img/portfolio/project6.png?raw=true",
    link: "https://minimalists-weather.netlify.app/",
    git: "https://github.com/wyu6609/Weather-app",
  },
  {
    title: "Guess My Number",
    description: "Guess a number between 1-20. Built with Vanilla JavaScript",
    img: "https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/portfolio/project5.png?raw=true",
    link: "https://number-guess-gaming.netlify.app/",
    git: "https://github.com/wyu6609/NumberGuessingGame",
  },
  {
    title: "To-Do App",
    description:
      "Manage and track your daily to-do list with this web app. Built on Vanilla JavaScript.",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/todo%20mockup.png?raw=true",
    link: "https://wills-todo.netlify.app/",
    git: "https://github.com/wyu6609/ToDoList",
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
        sx={{ py: 3, alignItems: "center" }}
      >
        PROJECTS
      </Typography>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={3}>
            <Link href={card.link} underline="none" target="_blank">
              <Card
                className="fancy_card"
                sx={{
                  alignItems: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    p: 3,
                    width: 280,
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
                    sx={{ mt: -2 }}
                    color="primary.main"
                    fontWeight="bold"
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    align="center"
                    variant="body2"
                    sx={{ mb: -2, fontSize: 12 }}
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
