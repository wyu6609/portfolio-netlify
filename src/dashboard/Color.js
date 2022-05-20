import React from "react";
import { Container, IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const colorSound = () => {
  let colorAudio = new Audio("/sounds/water_drop.mp3");
  colorAudio.play();
};

const colorPalette = [
  {
    mainColor: "#1976d2",
    secondaryColor: "#84baf0",
  },
  {
    mainColor: "#00ab55",
    secondaryColor: "#55ffa9",
  },
  {
    mainColor: "#f57c00",
    secondaryColor: "#ffbd7a",
  },
  {
    mainColor: "#c2185b",
    secondaryColor: "#ee7da9",
  },
  {
    mainColor: "#5048e5",
    secondaryColor: "#a7a3f1",
  },
];

const Color = ({ setColorMain, setColorSecondary }) => {
  let renderColorPalette = colorPalette.map((color) => {
    return (
      <IconButton
        onClick={() => {
          colorSound();
          setColorMain(color.mainColor);
          setColorSecondary(color.secondaryColor);
        }}
      >
        <CircleIcon className="fancy_card1" sx={{ color: color.mainColor }} />
      </IconButton>
    );
  });

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
      {renderColorPalette}
    </Container>
  );
};

export default Color;
