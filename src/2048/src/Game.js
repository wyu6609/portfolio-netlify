import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import { Box } from "@mui/material";

const App = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Lock scroll when game is active
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      // Unlock scroll when game is unmounted
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#FAFAFA",
        gap: 2,
        paddingTop: "30px",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      {/* ✅ ScoreBoard is inside GameBoard now */}
      <GameBoard onScoreChange={setScore} />
    </Box>
  );
};

export default App;
