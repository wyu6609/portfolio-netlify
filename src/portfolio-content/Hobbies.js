import React, { useState } from "react";
import "./Hobbies.css";
import { Document, Page } from "react-pdf";
import resume from "./Resume.pdf";
import resumePDF from "./Resume.pdf";
import { Grid, Paper } from "@mui/material";
import {
    Typography,
    Container,
    Card,
    CardActions,
    CardContent,
    Box
    
  } from "@mui/material"

import "./Resume.css";

const Hobbies = () => {

  return (
    <Container
   
    sx={{
      pb: 3,
      alignItems: "center",
      backgroundColor: "#eaeff1",
      border: "none",
    }}
  >   
  
  <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
        January 20 2024 at 1:15 PM
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Algorithms and Muscle memory
        </Typography>
        <div className = "iframe-container" >
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mRS7GluvBLo?rel=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
        style={{
          borderRadius: '15px', // Add rounded corners
          border: '2px solid #000' // Optional: Add a border for visibility
        }}
        ></iframe>
        </div>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>  
    <Card sx={{ minWidth: 275, mt: 2  }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
        March 6 2023 at 4:40 PM
        </Typography>
        I play Nocturne in C Sharp Minor by Chopin
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
        </Typography>
        <div className = "iframe-container" >
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DBpKZhytozs?rel=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
        style={{
          borderRadius: '15px', // Add rounded corners
          border: '2px solid #000' // Optional: Add a border for visibility
        }}
        ></iframe>
        </div>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>  

    <Card sx={{ minWidth: 275, mt: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
        August 20 2022 at 5:20 PM
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       😅
        </Typography>
        <Box component="img" src="https://media1.tenor.com/m/fJAoBHWymY4AAAAd/do-not-touch-it-programmer.gif" width="560" height="315" borderRadius= "8px" // Optional styling
        boxShadow = "1px" alt="a drawing of a cow that says if your code works fine don t touch it + my code"  />
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>  
    </Container>
  );
};

export default Hobbies;
