import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { List, ListItem } from "@mui/material";
import { AnimatePresence } from "framer-motion";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <List>
      <AnimatePresence>
        {tasks.map((task) => (
          <ListItem key={task.id} style={{ padding: 0 }}>
            <TaskItem task={task} />
          </ListItem>
        ))}
      </AnimatePresence>
    </List>
  );
};

export default TaskList;
