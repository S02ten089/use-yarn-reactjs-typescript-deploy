import React, { useState, useEffect } from "react";
import { Box, Avatar, IconButton, Heading, Text, Flex, Button, Input } from "@chakra-ui/react";
import { FaHome, FaTachometerAlt, 
  FaUserShield, 
  FaEnvelope, FaInfoCircle, FaQuestionCircle, 
  FaCog, FaSignOutAlt, 
  FaBell, FaSignInAlt } from "react-icons/fa";
import { FiSearch } from 'react-icons/fi';
import "./WrapperWithBorder.scss"; // Import SCSS file

interface WrapperWithBorderProps {
  children: React.ReactNode;
}

const WrapperWithBorder: React.FC<WrapperWithBorderProps> = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Cập nhật thời gian mỗi giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Flex className="sidebar">
        <Avatar className="avatar" size="md" name="User Name" />
        <Box>
          <IconButton className="icon-button" aria-label="Home" icon={<FaHome />} variant="ghost" />
          <IconButton className="icon-button" aria-label="Dashboard" icon={<FaTachometerAlt />} variant="ghost" />
          <IconButton className="icon-button" aria-label="Admin" icon={<FaUserShield />} variant="ghost" />
          <IconButton className="icon-button" aria-label="Messenger" icon={<FaEnvelope />} variant="ghost" />
        </Box>

        <Box className="bottom-icons">
          <IconButton className="icon-button" aria-label="About" icon={<FaInfoCircle />} variant="ghost" />
          <IconButton className="icon-button" aria-label="Help" icon={<FaQuestionCircle />} variant="ghost" />
          <IconButton className="icon-button" aria-label="Settings" icon={<FaCog />} variant="ghost" />
          <IconButton className="icon-button" aria-label="Logout" icon={<FaSignOutAlt />} variant="ghost" />
        </Box>
      </Flex>

      {/* Main Content */}
      <Box flex="1" className="main-content">
        <Box className="top-bar">
          {/* Search */}
          <Box className="search-bar">
            <FiSearch className="search-icon" />
            <Input placeholder="Search..."/>
          </Box>

          {/* Heading */}
          <Heading className="heading">Hello</Heading>
          <Text className="clock">{currentTime}</Text>

          <Box className="actions">
            <Button className="btn-red" leftIcon={<FaBell />}>
              <Text>Notifications</Text>
            </Button>
            <Button className="btn-blue" leftIcon={<FaSignInAlt />}>
              <Text>Login</Text>
            </Button>
          </Box>
        </Box>

        {/* Children */}
        <Box p={6}>{children}</Box>
      </Box>
    </Box>
  );
};

export default WrapperWithBorder;
