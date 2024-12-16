// pages/admin/Admin.tsx
import React, { useState } from "react";
import { Box, Heading, Button, Flex } from "@chakra-ui/react";
import AdminLogin from "./auth/AdminLogin";
import AdminRouter from "./AdminRouter";

const Admin: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleLoginSuccess = (token: string) => {
    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-r, teal.500, blue.500)"
      color="white"
      p={6}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {token ? (
        <Box
          maxW="800px"
          w="full"
          bg="white"
          color="black"
          p={6}
          boxShadow="xl"
          borderRadius="lg"
        >
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading size="lg">Admin Panel</Heading>
            <Button colorScheme="red" size="sm" onClick={handleLogout}>
              Đăng xuất
            </Button>
          </Flex>
          <AdminRouter />
        </Box>
      ) : (
        <Box
          maxW="400px"
          w="full"
          bg="white"
          color="black"
          p={6}
          boxShadow="lg"
          borderRadius="lg"
          textAlign="center"
        >
          <AdminLogin onLoginSuccess={handleLoginSuccess} />
        </Box>
      )}
    </Box>
  );
};

export default Admin;
