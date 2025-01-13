import React from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import "./WrapperWithBorder.scss";

interface WrapperWithBorderProps {
  children: React.ReactNode;
}

const WrapperWithBorder: React.FC<WrapperWithBorderProps> = ({ children }) => {
  return (
    <Box display="flex" height="100vh">
      <Sidebar />
      <Box flex="1" className="main-content">
        <Header />
        <Box p={6}>{children}</Box>
      </Box>
    </Box>
  );
};

export default WrapperWithBorder;
