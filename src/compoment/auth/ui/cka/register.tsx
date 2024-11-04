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

const ModalDangKy: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [apiError, setApiError] = useState<string | null>(null);

  // Hàm xác thực dữ liệu đầu vào
  const validate = () => {
    let newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email không được để trống!";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!password) {
      newErrors.password = "Mật khẩu không được để trống!";
    } else if (password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự!";
    } else if (password.length > 12) {
      newErrors.password = "Mật khẩu chỉ có thể chứa tối đa 12 ký tự!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Trả về true nếu không có lỗi
  };

  const handleRegister = async () => {
    // Xóa các lỗi trước đó
    setErrors({});
    setApiError(null); // Xóa lỗi API trước đó

    // Kiểm tra và xác thực dữ liệu đầu vào
    if (!validate()) {
      return; // Nếu có lỗi, không tiếp tục thực hiện
    }

    try {
      // Bước 1: Kiểm tra tài khoản đã tồn tại chưa
      const existingUserResponse = await axios.get(
        `https://6728bc566d5fa4901b6ab54b.mockapi.io/Login`
      );

      const existingUsers = existingUserResponse.data;

      // Kiểm tra xem email đã tồn tại trong danh sách người dùng chưa
      const userExists = existingUsers.some((user: any) => user.account === email);

      if (userExists) {
        setApiError("Tài khoản đã tồn tại. Vui lòng thử lại với email khác.");
        return; // Dừng thực hiện nếu tài khoản đã tồn tại
      }

      // Bước 2: Nếu tài khoản chưa tồn tại, tiến hành đăng ký
      await axios.post("https://6728bc566d5fa4901b6ab54b.mockapi.io/Login", {
        account: email,
        password: password,
      });

      console.log("Đăng ký thành công!");
      setEmail(""); // Xóa trường email
      setPassword(""); // Xóa trường mật khẩu
      setApiError(null); // Xóa các lỗi API trước đó
      onClose(); // Đóng modal
    } catch (error) {
      // Xử lý lỗi khi thực hiện gọi API
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data);
        setApiError("Đăng ký không thành công. Vui lòng thử lại.");
      } else {
        console.error("Lỗi không mong muốn:", error);
        setApiError("Đã xảy ra lỗi không mong muốn.");
      }
    }
  };

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Đăng Ký
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Đăng Ký</ModalHeader>
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
            <Button colorScheme="blue" mr={3} onClick={handleRegister}>
              Đăng Ký
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

export default ModalDangKy;
