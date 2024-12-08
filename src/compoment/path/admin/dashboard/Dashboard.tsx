// pages/dashboard/Dashboard.tsx
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

const Dashboard: React.FC = () => {
  return (
    <Box
      p={6}
      bgGradient="linear(to-br, gray.800, gray.900)"
      color="white"
      minH="100vh"
    >
      <Heading mb={6} textAlign="center">
        Dashboard
      </Heading>
      <Text mb={10} fontSize="lg" textAlign="center">
        Chào mừng bạn đến với trang Dashboard. Quản lý người dùng, bài viết và
        nhiều tính năng khác tại đây.
      </Text>

      {/* Stats Section */}
      <SimpleGrid columns={[1, 2, 3]} spacing={6} mb={10}>
        <Stat bg="gray.700" p={4} borderRadius="md" boxShadow="lg">
          <StatLabel fontSize="lg">Người dùng</StatLabel>
          <StatNumber fontSize="3xl">1,234</StatNumber>
          <Icon as={FaUsers} w={8} h={8} color="teal.400" mt={2} />
        </Stat>
        <Stat bg="gray.700" p={4} borderRadius="md" boxShadow="lg">
          <StatLabel fontSize="lg">Bài viết</StatLabel>
          <StatNumber fontSize="3xl">567</StatNumber>
          <Icon as={FaClipboardList} w={8} h={8} color="teal.400" mt={2} />
        </Stat>
        <Stat bg="gray.700" p={4} borderRadius="md" boxShadow="lg">
          <StatLabel fontSize="lg">Hoạt động</StatLabel>
          <StatNumber fontSize="3xl">89</StatNumber>
          <Icon as={FaClipboardList} w={8} h={8} color="teal.400" mt={2} />
        </Stat>
      </SimpleGrid>

      {/* Quick Actions */}
      <VStack spacing={6}>
        <Link to="/admin/manage-users">
          <Button
            colorScheme="teal"
            variant="solid"
            leftIcon={<FaUsers />}
            width="100%"
            maxW="300px"
          >
            Quản lý người dùng
          </Button>
        </Link>
        <Link to="/admin/manage-posts">
          <Button
            colorScheme="teal"
            variant="solid"
            leftIcon={<FaClipboardList />}
            width="100%"
            maxW="300px"
          >
            Quản lý bài viết
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Dashboard;
