import React from "react";
import { Box } from "@mui/material";

const colors = {
  2: "#EEE4DA",
  4: "#EDE0C8",
  8: "#F2B179",
  16: "#F59563",
  32: "#F67C5F",
  64: "#F65E3B",
  128: "#EDCF72",
  256: "#EDCC61",
  512: "#EDC850",
  1024: "#EDC53F",
  2048: "#EDC22E",
};

const Tile = ({ value }) => {
  return (
    <Box
      className="tile"
      sx={{
        width: 80,
        height: 80,
        backgroundColor: colors[Number(value)] || "#CDC1B4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        fontWeight: "bold",
        borderRadius: "8px",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      {value}
    </Box>
  );
};

export default Tile;
