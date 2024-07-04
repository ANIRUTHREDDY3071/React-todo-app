import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Container, Typography, Paper, Box } from "@mui/material";

const App = () => {
  return (
    <Box
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #4e54c8, #8f94fb)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            marginTop: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            React To-Do App
          </Typography>
          <TaskInput />
          <TaskList />
        </Paper>
      </Container>
    </Box>
  );
};

export default App;
