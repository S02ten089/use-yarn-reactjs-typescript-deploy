import { MantineProvider } from '@mantine/core';
import React from 'react';
import AppDashboard from './_setup/router/routes';
import { ChakraProvider } from '@chakra-ui/react';


const Dashboard: React.FC = () => {
  return (
    <>

        <MantineProvider>
          <AppDashboard />
        </MantineProvider>

    </>
  );
};

export default Dashboard;
