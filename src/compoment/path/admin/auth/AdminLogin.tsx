// components/auth/AdminLogin.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  useToast,
  Text,
} from "@chakra-ui/react";

interface AdminLoginProps {
  onLoginSuccess: (token: string) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [adminInfo, setAdminInfo] = useState<any | null>(null);
  const toast = useToast();

  const fakeData = {
    id: "1",
    username: "admin",
    // password: "admin123",
    token: "fake-token-12345",
    role: "Test",
  };

  const handleLogin = async () => {
    if (!username || !password) {
      toast({
        title: "Thiếu thông tin.",
        description: "Vui lòng nhập đầy đủ thông tin đăng nhập.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch(
        `https://67556df811ce847c992a0ec6.mockapi.io/admin?username=${username}&password=${password}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      if (response.ok && data.length > 0) {
        const adminData = data[0];
        toast({
          title: "Đăng nhập thành công.",
          description: `Chào mừng ${adminData.name}.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setAdminInfo(adminData); // Lưu thông tin admin sau khi đăng nhập thành công
        onLoginSuccess(adminData.token);
      } else {
        throw new Error("Không tìm thấy tài khoản.");
      }
    } catch (error) {
      // Hiển thị data ảo nếu API không trả về kết quả
      setAdminInfo(fakeData);
      toast({
        title: "Đăng nhập thất bại.",
        description: "Sử dụng data ảo.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={6} maxW="400px" mx="auto" boxShadow="lg" borderRadius="md">
      <Heading mb={6} textAlign="center">
        Admin Login
      </Heading>
      <FormControl mb={4}>
        <FormLabel>Tên đăng nhập</FormLabel>
        <Input
          type="text"
          placeholder="Nhập tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Mật khẩu</FormLabel>
        <Input
          type="password"
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="teal" w="full" onClick={handleLogin}>
        Đăng nhập
      </Button>

      {adminInfo && (
        <Box mt={6} p={4} bg="gray.100" borderRadius="md">
          <Text fontWeight="bold">Thông tin Admin:</Text>
          <Text>ID: {adminInfo.id}</Text>
          <Text>Tên đăng nhập: {adminInfo.username}</Text>
          <Text>Vai trò: {adminInfo.role || "Chưa xác định"}</Text>
        </Box>
      )}
    </Box>
  );
};

export default AdminLogin;
