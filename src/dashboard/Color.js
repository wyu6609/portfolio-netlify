import React from "react";
import { Container, IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const colorPalette = [
  {
    mainColor: "#009be5",
    secondaryColor: "#63ccff",
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
    secondaryColor: "#6c65e9",
  },
];

const Color = ({ setColorMain, setColorSecondary }) => {
  let renderColorPalette = colorPalette.map((color) => {
    return (
      <IconButton
        onClick={() => {
          setColorMain(color.mainColor);
          setColorSecondary(color.secondaryColor);
        }}
      >
        <CircleIcon sx={{ color: color.mainColor }} />
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
