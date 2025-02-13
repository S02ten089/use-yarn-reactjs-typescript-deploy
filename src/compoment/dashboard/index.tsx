import { MantineProvider } from '@mantine/core';
import React from 'react';
import AppDashboard from './App';
import { ChakraProvider } from '@chakra-ui/react';


const Dashboard: React.FC = () => {
  return (
    <>
    {/* <ChakraProvider>
        <MantineProvider>
          <AppDashboard />
        </MantineProvider>
    </ChakraProvider> */}
    </>
  );
};

export default Dashboard;
