import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import AboutPage from './about';
import Header from '../../../ui/header/UiUseFramworkCka/Header';

const AboutCard: React.FC = () => {
  return (
    <Box > 
   <Header />
   <AboutPage/>
    </Box>
  );
};

export default AboutCard;
