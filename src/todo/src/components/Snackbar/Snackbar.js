import React from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

const CustomSnackbar = ({ open, message, severity, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
