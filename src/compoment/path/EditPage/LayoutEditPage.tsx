// Layout.tsx
import { Box, Text } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box w="100vw" h="100vh" border="4px solid black" boxSizing="border-box">
      {/* Header */}
      <Box h="60px" border="2px solid yellow" p="10px" bg="gray.100">
        <Text fontWeight="bold">Đây là Header</Text>
      </Box>

      {/* Nội dung chính */}
      <Box display="flex" h="calc(100% - 60px)">
        {/* Sidebar bên trái */}
        <Box
          w="250px"
          borderRight="2px solid orange"
          p={4}
          bg="gray.50"
        >
          {children}
        </Box>

        {/* Vùng hiển thị nội dung */}
        <Box flex="1" p={4} borderLeft="2px solid yellow">
          <Text fontSize="lg" fontWeight="bold" mb={4}>Xem trước bố cục</Text>
          {/* TODO: Thêm nội dung động tại đây */}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
