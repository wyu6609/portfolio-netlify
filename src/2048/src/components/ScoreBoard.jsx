import React from "react";
import { Typography, Box } from "@mui/material";

const ScoreBoard = ({ score, highScore }) => (
  <Box
    sx={{
      marginTop: "20px",
      padding: 2,
      backgroundColor: "#F57C00",
      color: "white",
      textAlign: "center",
      borderRadius: "8px",
      width: "250px",
      fontSize: "20px",
      fontWeight: "bold",
    }}
  >
    <Typography variant="h6">Score: {score}</Typography>
    <Typography variant="subtitle1" sx={{ fontSize: "16px", color: "#FFF" }}>
      High Score: {highScore}
    </Typography>
  </Box>
);

export default ScoreBoard;
