import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // 🌙 Dark Mode
import Brightness7Icon from "@mui/icons-material/Brightness7"; // ☀️ Light Mode

const Controls = ({ onReset, onUndo, isDarkMode, toggleTheme }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        marginTop: 2,
      }}
    >
      <Button variant="contained" color="primary" onClick={onReset}>
        Reset
      </Button>
      <Button variant="contained" color="secondary" onClick={onUndo}>
        Undo
      </Button>

      {/* ✅ Theme Toggle Button Next to Undo */}
      <IconButton
        onClick={toggleTheme}
        sx={{
          backgroundColor: isDarkMode ? "#444" : "#ddd",
          color: isDarkMode ? "white" : "black",
          "&:hover": {
            backgroundColor: isDarkMode ? "#555" : "#ccc",
          },
        }}
      >
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

export default Controls;
