import React from 'react';
import {
  Box,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import './LoginPage.module.scss'; // Thêm vào đường dẫn SCSS

const LoginPage: React.FC = () => {
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Thêm xử lý đăng nhập ở đây
    toast({
      title: 'Đăng nhập thành công!',
      description: 'Bạn đã đăng nhập vào hệ thống.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box className="login-container">
      <Box className="login-form">
        <Text fontSize="2xl" mb={4} textAlign="center">
          Đăng nhập
        </Text>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" placeholder="Nhập email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mật khẩu</FormLabel>
              <Input type="password" name="password" placeholder="Nhập mật khẩu" />
            </FormControl>
            <Button colorScheme="blue" type="submit">
              Đăng nhập
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
