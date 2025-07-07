// pages/Home.tsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import UiUseCka from '../../ui/header/UiUseFramworkCka/App';
import HeroSection from '../../ui/hero';
import Footer from '../../ui/fooder/footer';
import Chat from '../AI/chatBox/Chat';
import { Banner } from '../../ui/main/components/Banner';

const Home: React.FC = () => {
  return (
    <Box background='#282c34'>
      {/* ai chatBox */}
      <Chat/>
      {/* <h1>Trang chủ</h1>
      <p>Chào mừng bạn đến với trang chủ của chúng tôi.</p> */}
      
      {/* Header */}
      <UiUseCka/>
      {/* Hero */}
      <HeroSection/>
      {/* Ux - Ui - Main */}
      <Banner/>
      
      {/* Footer */}
      <Footer/>
    </Box>
  );
};

export default Home;
