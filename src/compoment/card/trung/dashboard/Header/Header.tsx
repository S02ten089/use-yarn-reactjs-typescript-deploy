import React, { useState, useEffect } from "react";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { FaBell, FaSignInAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import "./Header.scss";

const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box className="top-bar">
      <Box className="search-bar">
        <FiSearch className="search-icon" />
        <Input placeholder="Search..." className="search-input" />
      </Box>
      <Heading className="heading">Hello</Heading>
      <Text className="clock">{currentTime}</Text>
      <Box className="actions">
        <Button className="btn-red" leftIcon={<FaBell />}>
          Notifications
        </Button>
        <Button className="btn-blue" leftIcon={<FaSignInAlt />}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
