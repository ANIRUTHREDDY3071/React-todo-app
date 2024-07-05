import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlice";
import { TextField, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      mb={2}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <TextField
        variant="outlined"
        label="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        margin="normal"
        style={{ marginRight: "10px" }} // Increase gap here
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskInput;
