import React from 'react';
import Contact from './Contact';
import { Box } from '@chakra-ui/react';
import UiUseCka from '../../ui/header/UiUseFramworkCka/App';
import Footer from '../../ui/fooder/footer';

const AppContactEng: React.FC = () => {
  return (
    <Box
    w='100%'
    // h='200px'
    bgGradient={[
      'linear(to-tr, teal.300, yellow.400)',
      'linear(to-t, blue.200, teal.500)',
      'linear(to-b, orange.100, purple.300)',
    ]}>
      <UiUseCka/>
      <Contact/>
      <Footer/>
    </Box>
  );
};

export default AppContactEng;
