
import React from 'react';
import { Box } from '@chakra-ui/react';
import AboutIntroduce from '../../ui/header/introduce';
import ContactListDrawer from '../../Contact/getUsernameIndex';

const Qr: React.FC = () => {
  return (
    <Box>
      <ContactListDrawer/>
      <AboutIntroduce/>

    </Box>
  );
};

export default Qr;
