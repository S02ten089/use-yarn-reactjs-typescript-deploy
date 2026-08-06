import React from 'react';
import { Box, Button, Container, Flex, Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react';

const Deploy: React.FC = () => {
  return (
    <Box minH="100vh" bgGradient="linear(to-b, blue.50, white)">
      {/* Header */}
      <Box as="header" bg="white" shadow="md">
        <Container maxW="container.xl" py={4}>
          <Flex justify="space-between" align="center">
            <Flex align="center">
              <Image src="/logo.png" alt="hacnil Logo" h={10} mr={4} />
              <Heading size="lg" color="blue.600">hacnil DISCORD</Heading>
            </Flex>
            <Flex as="nav">
              <Button variant="link" mr={6} color="gray.700" _hover={{ color: "blue.600" }}>Trang chủ</Button>
              <Button variant="link" mr={6} color="gray.700" _hover={{ color: "blue.600" }}>Sự kiện</Button>
              <Button variant="link" mr={6} color="gray.700" _hover={{ color: "blue.600" }}>Minigame</Button>
              <Button variant="link" color="gray.700" _hover={{ color: "blue.600" }}>Đội ngũ</Button>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="blue.600" color="white" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Heading size="2xl" mb={4}>Nơi những giọt sữa ngọt ngào hòa quyện cùng đam mê gaming vô tận</Heading>
          <Text fontSize="xl" mb={8}>Tham gia cộng đồng Discord chất lượng nhất nhì Việt Nam.</Text>
          <Flex justify="center" wrap="wrap" mb={8} gap={8}>
            <VStack mx={4}>
              <Text fontSize="3xl" fontWeight="bold">8,658+</Text>
              <Text>THÀNH VIÊN COMMUNITY</Text>
            </VStack>
            <VStack mx={4}>
              <Text fontSize="3xl" fontWeight="bold">13</Text>
              <Text>STAFF TẬN TÂM</Text>
            </VStack>
            <VStack mx={4}>
              <Text fontSize="3xl" fontWeight="bold">4</Text>
              <Text>MINIGAME HÀNG NGÀY</Text>
            </VStack>
            <VStack mx={4}>
              <Text fontSize="3xl" fontWeight="bold">1</Text>
              <Text>GIẢI ĐẤU ESPORTS</Text>
            </VStack>
          </Flex>
          <Button bg="white" color="blue.600" size="lg" borderRadius="full" fontWeight="bold" _hover={{ bg: "gray.100" }}>GIA NHẬP NGAY</Button>
        </Container>
      </Box>

      {/* Events Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <Heading size="xl" textAlign="center" mb={12}>HOẠT ĐỘNG MỚI NHẤT</Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
            {/* Event Card 1 */}
            <GridItem>
              <Box bg="white" shadow="lg" borderRadius="lg" overflow="hidden">
                <Image src="https://via.placeholder.com/400x200" alt="Event" w="full" h="48" objectFit="cover" />
                <Box p={6}>
                  <Heading size="md" mb={2}>hacnil EVENT: TỰ HÀO VIỆT NAM</Heading>
                  <Text color="gray.600" mb={4}>Chào mừng 30/4 & 1/5, hacnil tổ chức event...</Text>
                  <Button colorScheme="blue">THAM GIA NGAY</Button>
                </Box>
              </Box>
            </GridItem>
            {/* Event Card 2 */}
            <GridItem>
              <Box bg="white" shadow="lg" borderRadius="lg" overflow="hidden">
                <Image src="https://via.placeholder.com/400x200" alt="Event" w="full" h="48" objectFit="cover" />
                <Box p={6}>
                  <Heading size="md" mb={2}>EVENT VOTE ẢNH NỮ</Heading>
                  <Text color="gray.600" mb={4}>Nhân dịp Cá Tháng Tư, server tổ chức event...</Text>
                  <Button colorScheme="blue">THAM GIA NGAY</Button>
                </Box>
              </Box>
            </GridItem>
            {/* Event Card 3 */}
            <GridItem>
              <Box bg="white" shadow="lg" borderRadius="lg" overflow="hidden">
                <Image src="https://via.placeholder.com/400x200" alt="Event" w="full" h="48" objectFit="cover" />
                <Box p={6}>
                  <Heading size="md" mb={2}>EVENT ROLE @KING ROOM</Heading>
                  <Text color="gray.600" mb={4}>Cách nhận role: Khi đạt TOP 10 treo room...</Text>
                  <Button colorScheme="blue">THAM GIA NGAY</Button>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Why Join Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.xl">
          <Heading size="xl" textAlign="center" mb={12}>TẠI SAO NÊN THAM GIA?</Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <GridItem textAlign="center">
              <Text fontSize="6xl" mb={4}>🏆</Text>
              <Heading size="md" mb={2}>Giải thưởng cực khủng</Heading>
              <Text>Hàng trăm gói Discord Nitro, các vật phẩm giá trị...</Text>
            </GridItem>
            <GridItem textAlign="center">
              <Text fontSize="6xl" mb={4}>⚡</Text>
              <Heading size="md" mb={2}>Sự kiện liên tục</Heading>
              <Text>Đừng bao giờ cảm thấy nhàm chán với các minigame...</Text>
            </GridItem>
            <GridItem textAlign="center">
              <Text fontSize="6xl" mb={4}>🤝</Text>
              <Heading size="md" mb={2}>Kết nối vô tận</Heading>
              <Text>Hơn 7,000 thành viên sẵn sàng giao lưu...</Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="blue.600" color="white" py={8}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <GridItem>
              <Heading size="sm" mb={4}>KHÁM PHÁ</Heading>
              <VStack align="start">
                <Button variant="link" color="white" _hover={{ textDecoration: "underline" }}>Trang chủ</Button>
                <Button variant="link" color="white" _hover={{ textDecoration: "underline" }}>Giải đấu & Sự kiện</Button>
                <Button variant="link" color="white" _hover={{ textDecoration: "underline" }}>Danh sách Minigame</Button>
                <Button variant="link" color="white" _hover={{ textDecoration: "underline" }}>Đội ngũ Staff</Button>
              </VStack>
            </GridItem>
            <GridItem>
              <Heading size="sm" mb={4}>HỖ TRỢ</Heading>
              <VStack align="start">
                <Button variant="link" color="white" _hover={{ textDecoration: "underline" }}>Câu hỏi thường gặp</Button>
                <Button variant="link" color="white" _hover={{ textDecoration: "underline" }}>Quy tắc cộng đồng</Button>
                <Button variant="link" color="white" _hover={{ textDecoration: "underline" }}>Hỗ trợ kỹ thuật</Button>
                <Button variant="link" color="white" _hover={{ textDecoration: "underline" }}>Liên hệ hợp tác</Button>
              </VStack>
            </GridItem>
            <GridItem>
              <Text>&copy; 2026 Discord hacnil. All rights reserved.</Text>
              <Text>Designed & Developed by hacnil</Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Deploy;