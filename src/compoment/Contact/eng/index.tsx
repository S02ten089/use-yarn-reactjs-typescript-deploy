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
      'linear-gradient(to bottom, #a2d0fa, #000000, #000000, #000000, #0d071a, #000000)'
      // 'linear(to-tr, teal.300, yellow.400)',
      // 'linear(to-t, blue.200, teal.500)',
      // 'linear(to-b, orange.100, purple.300)',
    ]}>
      {/* linear-gradient(to bottom, #a2d0fa, #000000, #000000, #000000, #0d071a, #000000) */}
      <UiUseCka/>
      <Contact/>
      <br/>
      <br/>
      <Footer/>
    </Box>
  );
};

export default AppContactEng;
