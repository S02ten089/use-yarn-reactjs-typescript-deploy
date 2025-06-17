import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  Textarea, 
  VStack, 
  useToast, 
  Heading, 
  Text 
} from '@chakra-ui/react';

const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_LINK_SERVER || '',
  ENDPOINTS: {
    // GET_MESSAGES: process.env.REACT_APP_API_LINK_GET_CHAT || '',
    POST_LINK: process.env.REACT_APP_API_LINK_POST_CONTACT || '',
  },
};

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  // Xử lý khi gửi bình luận
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/database/${API_CONFIG.ENDPOINTS.POST_LINK}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Gửi tin nhắn thất bại');
      }

      const result = await response.json();

      toast({
        title: 'Gửi thành công!',
        description: 'Cảm ơn bạn đã liên hệ với chúng tôi.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      // Reset form
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast({
        title: 'Lỗi',
        description: 'Đã có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box maxW="600px" mx="auto" p={8}>
      <Heading as="h1" mb={6} color="aliceblue">Liên Hệ</Heading>
      <Text mb={4} color='#f0f8ff9c'>Liên hệ với chúng tôi qua email hoặc số điện thoại, hoặc gửi tin nhắn cho chúng tôi bằng cách điền form dưới đây:</Text>
      
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          {/* Tên */}
          <FormControl id="name" isRequired>
            <FormLabel color='#f0f8ff9c'>Tên của bạn</FormLabel>
            <Input 
              color='#ff4900'
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Nhập tên của bạn" 
            />
          </FormControl>

          {/* Email */}
          <FormControl id="email" isRequired>
            <FormLabel color='#f0f8ff9c'>Email của bạn</FormLabel>
            <Input 
              color='#ff4900'
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Nhập email của bạn" 
            />
          </FormControl>

          {/* Nội dung tin nhắn */}
          <FormControl id="message" isRequired>
            <FormLabel color='#f0f8ff9c'>Tin nhắn</FormLabel>
            <Textarea 
              color='#ff4900'
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Nhập nội dung tin nhắn" 
            />
          </FormControl>

          {/* Nút Gửi */}
          <Button 
            colorScheme="teal" 
            type="submit" 
            isLoading={isSubmitting}
          >
            Gửi Tin Nhắn
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Contact;