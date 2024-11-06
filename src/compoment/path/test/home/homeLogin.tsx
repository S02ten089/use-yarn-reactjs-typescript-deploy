import React, { useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import ModalDangNhap from '../UiAccont/Loginshare';

const Home: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const handleLoginSuccess = (username: string) => {
    setLoggedInUser(username);
  };

  return (
    <Box p={5}>
      {loggedInUser ? (
        <Box>
          <Heading>Chào mừng, {loggedInUser}!</Heading>
          {/* Full user interface */}
          <Text>Chúc bạn một ngày làm việc hiệu quả!</Text>
        </Box>
      ) : (
        <Box>
          <Heading>Chào mừng đến trang chủ!</Heading>
          <ModalDangNhap onLoginSuccess={handleLoginSuccess} />
        </Box>
      )}
    </Box>
  );
};

export default Home;
