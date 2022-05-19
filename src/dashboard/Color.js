import React from "react";
import { Container, IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const Color = ({ setColorMain, setColorSecondary }) => {
  return (
    <Container
      sx={{
        mt: 2,
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#0f2033",
        borderRadius: 20,
      }}
    >
      <IconButton
        onClick={() => {
          setColorMain("#009be5");
          setColorSecondary("#63ccff");
        }}
      >
        <CircleIcon sx={{ color: "#009be5" }} />
      </IconButton>
      <IconButton
        onClick={() => {
          setColorMain("#00ab55");
          setColorSecondary("#55ffa9");
        }}
      >
        <CircleIcon sx={{ color: "#00ab55" }} />
      </IconButton>
      <IconButton
        onClick={() => {
          setColorMain("#f57c00");
          setColorSecondary("#ffbd7a");
        }}
      >
        <CircleIcon sx={{ color: "#f57c00" }} />
      </IconButton>
      <IconButton
        onClick={() => {
          setColorMain("#c2185b");
          setColorSecondary("#ee7da9");
        }}
      >
        <CircleIcon sx={{ color: "#c2185b" }} />
      </IconButton>
      <IconButton
        onClick={() => {
          setColorMain("#5048e5");
          setColorSecondary("#6c65e9");
        }}
      >
        <CircleIcon sx={{ color: "#5048e5" }} />
      </IconButton>
    </Container>
  );
};

export default Color;
