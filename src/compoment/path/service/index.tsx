import React from 'react';
import { Box } from '@chakra-ui/react';
import UiUseCka from '../../ui/header/UiUseFramworkCka/App';
import Footer from '../../ui/fooder/footer';
import Service from './service';

const ServicePath: React.FC = () => {
  return (
    <Box 
    background='#282c34'
    >    
      <UiUseCka/>
        <Service/>
      <Footer/>
    </Box>
  );
};

export default ServicePath;
