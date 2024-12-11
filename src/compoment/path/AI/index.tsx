import React from 'react';
import { Box } from '@chakra-ui/react';
import TicTacToe from './applyAlgorithmMinimaxAlgorithm/index';

const AI: React.FC = () => {
  return (
    <Box background='#282c34'>
      {/* <h1>Trang chủ</h1>
      <p>Chào mừng bạn đến với trang chủ của chúng tôi.</p> */}
      <TicTacToe/>
    </Box>
  );
};

export default AI;
