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
    title: "Bot.io",
    description:
      "A fictional NFT BOT market, built with RAILS, REACT and MATERIAL UI",
    img: "https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/portfolio/project4.png?raw=true",
    link: "http://buy-ya-bots.herokuapp.com/",
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
];
const stackCards = [1, 2, 3, 4];
const Projects = () => {
  return (
    <Container
      sx={{
        py: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        alignItems: "center",
      }}
      maxWidth="lg"
    >
      <Typography
        align="center"
        variant="h4"
        component="h2"
        sx={{ pb: 3, alignItems: "center" }}
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
      <Divider />
    </Container>
  );
};

export default Projects;
