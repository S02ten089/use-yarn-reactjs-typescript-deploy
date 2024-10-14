import React from 'react';
import styles from './footer.module.scss'; // Import as module

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        <div className={styles.footerSection}>
          <a href='/'> 
            <img src="/path-to-logo/logo.png" alt="Logo" className={styles.footerLogo} />
          </a> 
          {/* <nav className={styles.footerNav}>
            <a href="/">Trang Chủ</a>
            <a href="/about">Giới Thiệu</a>
            <a href="/services">Dịch Vụ</a>
            <a href="/contact">Liên Hệ</a>
          </nav> */}
        </div>

        {/* Social media links */}
        <div className={styles.footerSection}>
          <h4>Kết nối với chúng tôi</h4>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>

        {/* Copyright section */}
        <div className={`${styles.footerSection} ${styles.copyright}`}>
          <p>&copy; 2024 Công Ty S02. All rights reserved.</p>
          <p>Địa chỉ: 123 Đường ABC, Quận XYZ, Thành phố HCM</p>
          <p>Email: VTT-S02.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
