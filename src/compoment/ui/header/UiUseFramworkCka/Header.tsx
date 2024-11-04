"use client"
import React, { useState } from 'react';
import styles from './header.module.scss';
import MobileMenuToggle from './menu';
import LogoComponent from '../../../logo';
import { spinAnimation } from '../../../ux/animation/overthink';
import { Box } from '@chakra-ui/react';
import ModalDangNhap from '../../../auth/ui/cka/login';
import ModalDangKy from '../../../auth/ui/cka/register';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };;

  return (
    <header className={styles.header}>
      <Box className={styles.logo} _hover={{ animation: `${spinAnimation}`}}>
        <LogoComponent />
      </Box>
      <nav className={`${styles.navMenu} ${menuOpen ? styles.open : ''}`}>
        <ul style={{
          display:"flex",
          listStyleType:"none",
          gap:"20px",
          }}>
          <li><a className={styles.aLiHerder} href="/home">Trang Chủ</a></li>
          <li><a className={styles.aLiHerder} href="/about">Giới Thiệu</a></li>
          <li><a className={styles.aLiHerder} href="/services">Dịch Vụ</a></li>
          <li><a className={styles.aLiHerder} href="/contact">Liên Hệ</a></li>
          <li><a className={styles.aLiHerder} href="/Donate">Ủng Hộ</a></li>
        </ul>
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.loginBtn}>
          <ModalDangNhap />
        </button>
        <button className={styles.signupBtn}>
          <ModalDangKy/>
          {/* Đăng Ký */}
        </button>
      </div>
      <MobileMenuToggle toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
