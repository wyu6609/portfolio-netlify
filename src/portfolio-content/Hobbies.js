import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import resume from "./Resume.pdf";
import resumePDF from "./Resume.pdf";
import { Grid, Paper } from "@mui/material";
import {
    
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
  >     <h3>March 16 at 2:40 PM</h3>
        <p>I play Nocturne in C Sharp Minor by Chopin</p>
        
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DBpKZhytozs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Container>
  );
};

export default Hobbies;
