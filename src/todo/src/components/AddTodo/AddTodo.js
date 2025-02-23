import React from "react";
import { TextField, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddTodo = ({ input, onInputChange, onAddTodo }) => {
  return (
    <>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Add a new task"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onAddTodo()}
        style={{ marginBottom: "1rem" }}
      />
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: "fixed", bottom: "2rem", right: "2rem" }}
        onClick={onAddTodo}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default AddTodo;
