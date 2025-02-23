import React, { useState } from "react";
import Game from "../2048/src/Game";
import { Box } from "@mui/material";

// Functional Component
const GameApp = ({ initialName }) => {
  // State management using useState hook
  // Disable scrolling when the component mounts
  <Box
    sx={{
      width: "100%",
      height: "100vh", // Full viewport height
      overflow: "hidden", // Disable scrolling for this container
    }}
  >
    <Game />
  </Box>;
};

export default GameApp;
