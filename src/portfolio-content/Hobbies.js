import React, { useState } from "react";
import "./Hobbies.css";
import { Document, Page } from "react-pdf";
import resume from "./Resume.pdf";
import resumePDF from "./Resume.pdf";
import { Grid, Paper } from "@mui/material";
import {
    Typography,
    Container,
  

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
  >     <Typography color="textPrimary" gutterBottom variant="h1" sx= {{fontSize:12, fontWeight:'bold'}}>March 16 at 2:40 PM</Typography>
       
           <Typography color="textPrimary" gutterBottom variant="p4" sx= {{fontSize:12}}>
           I play Nocturne in C Sharp Minor by Chopin
        </Typography>
        <div className = "iframe-container" >
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DBpKZhytozs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </Container>
  );
};

export default Hobbies;
