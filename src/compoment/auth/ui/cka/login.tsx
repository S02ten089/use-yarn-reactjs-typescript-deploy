import React, { useState } from "react";
import { 
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";

interface ModalDangNhapProps {
  onLoginSuccess: (username: string) => void;
}

const ModalDangNhap: React.FC<ModalDangNhapProps> = ({ onLoginSuccess }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [apiError, setApiError] = useState<string | null>(null);

  const handleLogin = async () => {
    let newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email không được để trống!";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!password) {
      newErrors.password = "Mật khẩu không được để trống!";
    } else if (password.length < 6) {
      newErrors.password = "Mật khẩu phải có 6 chữ số trở lên!";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.get("https://6728bc566d5fa4901b6ab54b.mockapi.io/Login", {
          params: {
            account: email,
            password: password,
          },
        });
        const username = response.data[0]?.account; // lấy tên người dùng từ response
        if (username) {
          onLoginSuccess(username??' checkApi email or account'); // gọi hàm onLoginSuccess khi đăng nhập thành công
          onClose();
        } else {
          setApiError("Đăng nhập không thành công. Vui lòng thử lại.");
        }
      } catch (error) {
        setApiError("Đăng nhập không thành công. Vui lòng thử lại.");
      }
    }
  };

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Đăng Nhập
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Đăng Nhập</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="email" isRequired isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Nhập email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
            </FormControl>

            <FormControl id="password" isRequired mt={4} isInvalid={!!errors.password}>
              <FormLabel>Mật khẩu</FormLabel>
              <Input
                type="password"
                placeholder="Nhập mật khẩu của bạn"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
            </FormControl>
            {apiError && <Box color="red.500" mt={2}>{apiError}</Box>}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleLogin}>
              Đăng Nhập
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Hủy
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDangNhap;
