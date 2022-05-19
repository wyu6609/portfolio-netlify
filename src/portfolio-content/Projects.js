import React from "react";
import {
  Link,
  Container,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import "./Project.css";

const cards = [
  {
    title: "Bot.IO 2.0",
    description:
      "A fictional NFT BOT market, built with RAILS, REACT and MATERIAL UI",
    img: "https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/portfolio/project4.png?raw=true",
    link: "http://buy-ya-bots.herokuapp.com/",
  },
  {
    title: "Bot.IO 1.0",
    description: "The first version of Bot.IO",
    img: "https://github.com/wyu6609/wyu6609.github.io/blob/main/assets/img/portfolio/project4.png?raw=true",
    link: "http://bot-market-io.herokuapp.com/",
  },
  {
    title: "WhatsUpp",
    description:
      "Chat app inspired by WhatsApp. Utilizes action cable and web sockets!",
    img: "https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/portfolio/project1.png?raw=true",
    link: "https://github.com/wyu6609/whats-app-clone-frontend",
  },
  {
    title: "UHungry?",
    description:
      "Hungry? Search an ingredient and see a bunch of random recipes!",
    img: "https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/portfolio/project3.png?raw=true",
    link: "https://zen-lamport-1715c0.netlify.app/#/",
  },
  {
    title: "NYC HEALTH",
    description:
      "Search a NYC restaurant. Visualize the health stats on Google Maps",
    img: "https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/portfolio/project2.png?raw=true",
    link: "https://wyu6609.github.io/NYC-health-inspection/",
  },
  {
    title: "Minimalist Weather",
    description: "Simple and clean weather app. Built with Vanilla JavaScript",
    img: "https://github.com/wyu6609/wyu6609.github.io/blob/main/assets/img/portfolio/project6.png?raw=true",
    link: "https://wyu6609.github.io/Weather-app/",
  },
  {
    title: "Guess My Number",
    description: "Guess a number between 1-20. Built with Vanilla JavaScript",
    img: "https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/portfolio/project5.png?raw=true",
    link: "https://wyu6609.github.io/numberguessinggame",
  },
  {
    title: "To-Do App",
    description:
      "Manage and track your daily to-do list with this web app. Built on Vanilla JavaScript.",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/todo%20mockup.png?raw=true",
    link: "https://wills-todo.netlify.app/",
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
      <Grid container spacing={2}>
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
                    pt: "",
                  }}
                  image={card.img}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h6"
                    component="h6"
                  >
                    {card.title}
                  </Typography>
                  <Typography align="center" variant="body2">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
