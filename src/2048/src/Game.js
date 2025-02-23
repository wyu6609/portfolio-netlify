import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import { Box } from "@mui/material";

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#FAFAFA",
        gap: 2,
        paddingTop: "30px",
        overflow: "hidden",
      }}
    >
      {/* ✅ ScoreBoard is inside GameBoard now */}
      <GameBoard onScoreChange={setScore} />
    </Box>
  );
};

export default App;
