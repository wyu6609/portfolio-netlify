import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Pagination,
  IconButton,
  TextField,
  ButtonGroup,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import CustomSnackbar from "./components/Snackbar/Snackbar";
import useTodo from "./hooks/useTodo";

const App = () => {
  const {
    todos,
    input,
    editingIndex,
    editText,
    snackbarOpen,
    snackbarMessage,
    snackbarSeverity,
    currentPage,
    itemsPerPage,
    currentTodos,
    searchQuery,
    filterStatus,
    setInput,
    setEditText,
    setSnackbarOpen,
    setSearchQuery,
    setFilterStatus,
    addTodo,
    toggleTodo,
    deleteTodo,
    startEditing,
    saveEdit,
    paginate,
    filteredTodos,
  } = useTodo();

  // State to control search bar visibility
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Calculate total number of pages based on filtered todos
  const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);

  // Count the number of in-progress and completed tasks
  const inProgressCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor="#f5f5f5"
      padding="1rem"
      minHeight="100vh"
    >
      <Container
        maxWidth="sm"
        style={{
          margin: "0 auto",
          padding: "2rem",
          maxWidth: "600px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Header and Search Icon */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" align="center" gutterBottom>
            To-Do App
          </Typography>
          <IconButton onClick={() => setIsSearchVisible(!isSearchVisible)}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Filter Toggles */}
        <Box display="flex" justifyContent="center" marginBottom="1rem">
          <ButtonGroup variant="contained">
            <Button
              onClick={() => setFilterStatus("all")}
              color={filterStatus === "all" ? "primary" : "inherit"}
            >
              All
            </Button>
            <Button
              onClick={() => setFilterStatus("in-progress")}
              color={filterStatus === "in-progress" ? "primary" : "inherit"}
              disabled={inProgressCount === 0} // Disable if no in-progress tasks
              sx={{
                opacity: inProgressCount === 0 ? 0.5 : 1, // Grey out if no in-progress tasks
              }}
            >
              In Progress
            </Button>
            <Button
              onClick={() => setFilterStatus("completed")}
              color={filterStatus === "completed" ? "primary" : "inherit"}
              disabled={completedCount === 0} // Disable if no completed tasks
              sx={{
                opacity: completedCount === 0 ? 0.5 : 1, // Grey out if no completed tasks
              }}
            >
              Completed
            </Button>
          </ButtonGroup>
        </Box>

        {/* Add Todo Component */}
        <AddTodo input={input} onInputChange={setInput} onAddTodo={addTodo} />
        {/* Search Bar */}
        {isSearchVisible && (
          <Box marginBottom="0.5rem">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="small" // Smaller text field
              style={{ marginBottom: "0.5rem" }} // Reduced margin
            />
          </Box>
        )}
        {/* Todo List Component */}
        <TodoList
          todos={currentTodos}
          editingIndex={editingIndex}
          editText={editText}
          onToggleComplete={toggleTodo}
          onDelete={deleteTodo}
          onStartEditing={startEditing}
          onSaveEdit={saveEdit}
          onEditTextChange={setEditText}
        />

        {/* Pagination Controls */}
        <Box display="flex" justifyContent="center" marginTop="1rem">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, page) => paginate(page)}
            color="primary"
          />
        </Box>
      </Container>

      {/* Snackbar Component */}
      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={() => setSnackbarOpen(false)}
      />
    </Box>
  );
};

export default App;
