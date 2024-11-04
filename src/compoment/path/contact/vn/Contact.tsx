// pages/Home.tsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import AppContact from '../../../Contact/vn';

const Contact: React.FC = () => {
  return (
    <Box>
      {/* liên hệ bản việt */}
      <AppContact/>
    </Box>
  );
};

export default Contact;
