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
import "./Project.css";

const cards = [
  {
    title: "Bot.io 2.0",
    description:
      "A fictional NFT BOT market, built with RAILS, REACT and MATERIAL UI",
    img: "https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/portfolio/project4.png?raw=true",
    link: "http://buy-ya-bots.herokuapp.com/",
    git: "https://github.com/wyu6609/bot_io_2.0",
  },
  {
    title: "Bot.io 1.0",
    description: "The first version of Bot.IO",
    img: "https://github.com/wyu6609/wyu6609.github.io/blob/main/assets/img/portfolio/project4.png?raw=true",
    link: "http://bot-market-io.herokuapp.com/",
    git: "https://github.com/wyu6609/bot_heroku_Test",
  },
  {
    title: "WhatsUpp",
    description:
      "Chat app inspired by WhatsApp. Utilizes action cable and web sockets!",
    img: "https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/portfolio/project1.png?raw=true",
    link: "https://github.com/wyu6609/whats-app-clone-frontend",
    git: "https://github.com/wyu6609/whats-app-clone-frontend",
  },
  {
    title: "UHungry?",
    description:
      "Hungry? Search an ingredient and see a bunch of random recipes!",
    img: "https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/portfolio/project3.png?raw=true",
    link: "https://zen-lamport-1715c0.netlify.app/#/",
    git: "https://github.com/wyu6609/Phase-2-project-Uhungry",
  },
  {
    title: "NYC HEALTH",
    description:
      "Search a NYC restaurant. Visualize the health stats on Google Maps",
    img: "https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/portfolio/project2.png?raw=true",
    link: "https://wyu6609.github.io/NYC-health-inspection/",
    git: "https://github.com/wyu6609/NYC-health-inspection",
  },
  {
    title: "Minimalist Weather",
    description: "Simple and clean weather app. Built with Vanilla JavaScript",
    img: "https://github.com/wyu6609/wyu6609.github.io/blob/main/assets/img/portfolio/project6.png?raw=true",
    link: "https://wyu6609.github.io/Weather-app/",
    git: "https://github.com/wyu6609/Weather-app",
  },
  {
    title: "Guess My Number",
    description: "Guess a number between 1-20. Built with Vanilla JavaScript",
    img: "https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/portfolio/project5.png?raw=true",
    link: "https://wyu6609.github.io/numberguessinggame",
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
    <Container sx={{ pb: 3, alignItems: "center", backgroundColor: "#0f2033" }}>
      <Typography
        align="center"
        variant="h4"
        component="h2"
        sx={{ py: 3, alignItems: "center", color: "white" }}
      >
        Select a project to view!
      </Typography>
      <Grid container spacing={1}>
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
                    backgroundColor: "#eeeeee",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    p: 2.5,
                    width: 250,
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
