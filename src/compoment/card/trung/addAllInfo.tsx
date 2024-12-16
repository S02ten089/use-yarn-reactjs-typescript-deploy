import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Button,
  VStack,
  useToast,
} from "@chakra-ui/react";
import styles from "./AddInfoAll.module.scss";
import { Link } from 'react-router-dom'; 

const AddInfoAll: React.FC = () => {
  const [title, setTitle] = useState("Sample Title");
  const [name, setName] = useState("John Doe");
  const [content, setContent] = useState("This is a sample content for the Add Info page.");
  const [image, setImage] = useState<File | null>(null);
  const toast = useToast();

  // Hàm xử lý tải ảnh
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  // Hàm gửi dữ liệu đến API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Kiểm tra nhập liệu
    if (!title || !name || !content || !image) {
      toast({
        title: "Thiếu thông tin.",
        description: "Vui lòng điền đầy đủ các trường.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Tạo form data để gửi file
    const formData = new FormData();
    formData.append("title", title);
    formData.append("name", name);
    formData.append("content", content);
    formData.append("image", image);

    try {
      const response = await fetch("/api/add-info", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Thành công.",
          description: "Thông tin đã được lưu.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        // Reset form
        setTitle("");
        setName("");
        setContent("");
        setImage(null);
      } else {
        toast({
          title: "Lỗi.",
          description: "Đã xảy ra lỗi khi lưu thông tin.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Lỗi.",
        description: "Không thể kết nối đến server.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box className={styles.container} p={6} maxW="600px" mx="auto">
      <Heading className={styles.heading} mb={6}>Thêm Thông Tin</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Tiêu đề</FormLabel>
            <Input
              type="text"
              placeholder="Nhập tiêu đề"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Tên</FormLabel>
            <Input
              type="text"
              placeholder="Nhập tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Nội dung</FormLabel>
            <Textarea
              placeholder="Nhập nội dung"
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={styles.textarea}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Ảnh</FormLabel>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
          </FormControl>

          <Button className={styles.submitButton} colorScheme="teal" type="submit">
            Lưu thông tin đã nhập
          </Button>
          <Button 
            as={Link} 
            to="/trung" 
            className={styles.submitButton} 
            colorScheme="teal">
          Về card chính
        </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AddInfoAll;
