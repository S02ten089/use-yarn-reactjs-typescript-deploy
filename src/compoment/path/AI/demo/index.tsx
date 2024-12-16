import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, VStack } from "@chakra-ui/react";

const AI: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const fetchAIResponse = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/ai-response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_input: userInput }),
      });

      if (!response.ok) throw new Error("Error fetching AI response");

      const data = await response.json();
      setAiResponse(data.response);
    } catch (error) {
      console.error(error);
      setAiResponse("An error occurred while fetching the AI response.");
    }
  };

  return (
    <Box background="#282c34" color="white" minH="100vh" p={8}>
      <VStack spacing={6}>
        <Heading as="h1" size="lg">AI Assistant</Heading>
        <Input
          placeholder="Ask something..."
          value={userInput}
          onChange={handleInputChange}
          size="lg"
          background="white"
          color="black"
        />
        <Button colorScheme="teal" onClick={fetchAIResponse}>
          Get Response
        </Button>
        {aiResponse && (
          <Text fontSize="xl" mt={4} p={4} background="teal.500" borderRadius="md">
            {aiResponse}
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default AI;
