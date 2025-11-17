import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import { Box } from "@mui/material";

const App = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Prevent scrolling on the body while game is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
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
