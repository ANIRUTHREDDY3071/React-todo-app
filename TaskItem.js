import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../store/tasksSlice";
import { TextField, IconButton, Box, Checkbox } from "@mui/material";
import { Delete, Edit, Save } from "@mui/icons-material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";

const TaskItemWrapper = styled(motion.div)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
}));

const TaskText = styled(Box)(({ completed }) => ({
  flexGrow: 1,
  cursor: "pointer",
  textDecoration: completed ? "line-through" : "none",
}));

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    if (newText.trim()) {
      dispatch(editTask({ id: task.id, text: newText }));
      setIsEditing(false);
    }
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <TaskItemWrapper
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <Checkbox
        checked={task.completed}
        onChange={handleToggle}
        color="primary"
      />
      {isEditing ? (
        <TextField
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          fullWidth
          margin="normal"
        />
      ) : (
        <TaskText completed={task.completed} onClick={handleToggle}>
          {task.text}
        </TaskText>
      )}
      {isEditing ? (
        <IconButton onClick={handleEdit}>
          <Save />
        </IconButton>
      ) : (
        <IconButton onClick={() => setIsEditing(true)}>
          <Edit />
        </IconButton>
      )}
      <IconButton onClick={handleDelete}>
        <Delete />
      </IconButton>
    </TaskItemWrapper>
  );
};

export default TaskItem;
