import React from "react";
import { Box, Avatar, IconButton, Flex } from "@chakra-ui/react";
import {
  FaHome,
  FaTachometerAlt,
  FaUserShield,
  FaEnvelope,
  FaInfoCircle,
  FaQuestionCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom"
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <Flex className="sidebar">
      <Avatar className="avatar" size="md" name="User Name" />
      <Box>
        <Link to="/tien/dashboard">
          <IconButton className="icon-button" aria-label="Home" icon={<FaHome />} variant="ghost" />
        </Link>
        <Link to="/tien/dashboard/contact">
          <IconButton className="icon-button" aria-label="Dashboard" icon={<FaTachometerAlt />} variant="ghost" />
        </Link>
        
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
  );
};

export default Sidebar;
