import React from "react";
import { List, Card, CardContent } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  editingIndex,
  editText,
  onToggleComplete,
  onDelete,
  onStartEditing,
  onSaveEdit,
  onEditTextChange,
}) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <Card
          key={index}
          style={{
            marginBottom: "0.5rem",
            backgroundColor: todo.completed ? "#f5f5f5" : "#ffffff", // Grey background for completed tasks
            opacity: todo.completed ? 0.7 : 1, // Reduce opacity for completed tasks
          }}
        >
          <CardContent>
            <TodoItem
              todo={todo}
              index={index}
              editingIndex={editingIndex}
              editText={editText}
              onToggleComplete={onToggleComplete}
              onDelete={onDelete}
              onStartEditing={onStartEditing}
              onSaveEdit={onSaveEdit}
              onEditTextChange={onEditTextChange}
            />
          </CardContent>
        </Card>
      ))}
    </List>
  );
};

export default TodoList;
