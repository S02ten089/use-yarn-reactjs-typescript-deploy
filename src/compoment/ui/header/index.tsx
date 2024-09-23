import React from 'react';
import styles from './Header.module.scss'; // Import SCSS module
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider, Box, Flex, Button } from '@chakra-ui/react';

import Home from './menu/home/Home';
import Contact from './menu/contact/Contact';


const Header: React.FC = () => {
  return (
    // <ChakraProvider>
    //   <Router>
    //     {/* Header navigation */}
    //     <Box bg="teal.500" p={4}>
    //     <Flex justify="space-between" align="center">
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="https://via.placeholder.com/150" alt="Logo" />
      </div>
      <nav className={styles.navMenu}>
        <ul>
          <li><a href="#home">Trang chủ</a></li>
          <li><a href="#about">Giới thiệu</a></li>
          <li><a href="#services">Dịch vụ</a></li>
          <li><a href="#contact">Liên hệ</a></li>
        </ul>
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.loginBtn}>Đăng nhập</button>
        <button className={styles.signupBtn}>Đăng ký</button>
      </div>
    </header>
  );
};

export default Header;
