// pages/Contact.tsx
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

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  // Xử lý khi gửi bình luận
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Giả lập xử lý gửi bình luận
    setTimeout(() => {
      toast({
        title: 'Gửi thành công!',
        description: 'Cảm ơn bạn đã liên hệ với chúng tôi.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 2000); // Giả lập thời gian gửi bình luận
  };

  return (
    <Box maxW="600px" mx="auto" p={8}>
      <Heading as="h1" mb={6}>Liên Hệ</Heading>
      <Text mb={4}>Liên hệ với chúng tôi qua email hoặc số điện thoại, hoặc gửi tin nhắn cho chúng tôi bằng cách điền form dưới đây:</Text>
      
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          {/* Tên */}
          <FormControl id="name" isRequired>
            <FormLabel>Tên của bạn</FormLabel>
            <Input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Nhập tên của bạn" 
            />
          </FormControl>

          {/* Email */}
          <FormControl id="email" isRequired>
            <FormLabel>Email của bạn</FormLabel>
            <Input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Nhập email của bạn" 
            />
          </FormControl>

          {/* Nội dung tin nhắn */}
          <FormControl id="message" isRequired>
            <FormLabel>Tin nhắn</FormLabel>
            <Textarea 
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
