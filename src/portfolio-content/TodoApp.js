import React, { useState } from "react";
import App from "../todo/src/App";
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
    <App />
  </Box>;
};

export default GameApp;
