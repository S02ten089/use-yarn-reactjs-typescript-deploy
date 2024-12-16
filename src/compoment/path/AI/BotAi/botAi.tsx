import React from "react";
import { Box } from "@chakra-ui/react";
import ChatBot from "./index";

const AI: React.FC = () => {
  return (
    <Box background="#282c34" color="white" p={6}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Welcome to Our AI Chatbot</h1>
      <ChatBot />
    </Box>
  );
};

export default AI;
