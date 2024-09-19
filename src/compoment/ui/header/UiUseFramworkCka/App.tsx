// App.tsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './theme';
import Header from './Header';
// import './App.css';

const UiUseCka: React.FC = () => (
  <ChakraProvider theme={customTheme}>
    <Header />
    {/* Các thành phần khác */}
  </ChakraProvider>
);

export default UiUseCka;
