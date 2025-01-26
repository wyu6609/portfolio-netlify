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
        January 20 2024 at 4:40 PM
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Algorithms and Muscle memory
        </Typography>
        <div className = "iframe-container" >
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mRS7GluvBLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DBpKZhytozs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
        <div class="tenor-gif-embed" data-postid="17252607" data-share-method="host" data-aspect-ratio="1.15942" data-width="100%"><a href="https://tenor.com/view/do-not-touch-it-programmer-walking-cow-coding-gif-17252607">Do Not Touch It Programmer GIF</a>from <a href="https://tenor.com/search/do+not+touch+it-gifs">Do Not Touch It GIFs</a></div> 
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>  

    <Card sx={{ minWidth: 275, mt: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
        September 09 2022 at 2:20 PM
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Lorem ipsum is placeholder text.
        </Typography>
        <div  >
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>  

   



    
     
    </Container>
  );
};

export default Hobbies;
