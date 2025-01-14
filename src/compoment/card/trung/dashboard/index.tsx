import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Icon,
  Button,
  VStack,
} from "@chakra-ui/react";
import { FaUsers, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar"; // Adjust the import path as necessary
import Header from "./Header/Header"; // Adjust the import path as necessary
import { useCountUp } from "./useCountUp";
import "./dashboard.scss";

const Dashboard: React.FC = () => {
  const users = useCountUp({ start: 0, end: 1234, duration: 1500, updateInterval: 50 });
  const posts = useCountUp({ start: 0, end: 567, duration: 1500, updateInterval: 50 });
  const activities = useCountUp({ start: 0, end: 89, duration: 1500, updateInterval: 50 });

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box flex="1" className="main-content">
        {/* Header */}
        <Header />

        <Box p={6}>
          <div className="box">
            <Heading className="heading" mb={6} textAlign="center">
              Dashboard
            </Heading>
            <Text className="text" mb={10} fontSize="lg" textAlign="center">
              Chào mừng bạn đến với trang Dashboard. Quản lý người dùng, bài viết và nhiều tính năng khác tại đây.
            </Text>

            {/* Stats Section */}
            <SimpleGrid className="simple-grid" columns={[1, 2, 3]} spacing={6} mb={10}>
              <Stat className="stat">
                <div>
                  <StatLabel className="stat-label">Người dùng</StatLabel>
                  <StatNumber className="stat-number">{users}</StatNumber>
                </div>
                <Icon className="icon" as={FaUsers} />
              </Stat>
              <Stat className="stat">
                <div>
                  <StatLabel className="stat-label">Bài viết</StatLabel>
                  <StatNumber className="stat-number">{posts}</StatNumber>
                </div>
                <Icon className="icon" as={FaClipboardList} />
              </Stat>
              <Stat className="stat">
                <div>
                  <StatLabel className="stat-label">Hoạt động</StatLabel>
                  <StatNumber className="stat-number">{activities}</StatNumber>
                </div>
                <Icon className="icon" as={FaClipboardList} />
              </Stat>
            </SimpleGrid>

            {/* Quick Actions */}
            <VStack className="vstack" spacing={6}>
              <Link to="/trung/managertrung">
                <Button className="button" leftIcon={<FaClipboardList />}>
                  Quản lý bài viết
                </Button>
              </Link>
            </VStack>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
