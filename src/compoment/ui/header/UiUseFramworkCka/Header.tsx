"use client"
import React, { useState } from 'react';
import styles from './header.module.scss'; // Import SASS module
import { FaBars } from 'react-icons/fa';
// import Image from 'next/image';
import logo from "../../../../showimg/logo/logofonthome.png"

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
        {/* <Image
          src={logo}  // Đường dẫn logo trong thư mục public
          alt="Logo"
          // width={150}  // Kích thước chiều rộng
          // height={50}  // Kích thước chiều cao
          className={styles.ImageLogoClass}
        /> */}
      </div>
      <nav className={`${styles.navMenu} ${menuOpen ? styles.open : ''}`}>
        <ul style={{
          display:"flex",
          listStyleType:"none",
          gap:"20px",
          // margin: 0,
          // padding: 0
          }}>
          <li><a className={styles.aLiHerder} href="/home">Trang Chủ</a></li>
          <li><a className={styles.aLiHerder} href="/about">Giới Thiệu</a></li>
          <li><a className={styles.aLiHerder} href="/services">Dịch Vụ</a></li>
          <li><a className={styles.aLiHerder} href="/contact">Liên Hệ</a></li>
        </ul>
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.loginBtn}>Đăng Nhập</button>
        <button className={styles.signupBtn}>Đăng Ký</button>
      </div>
      <button className={styles.mobileMenuToggle} onClick={toggleMenu}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
