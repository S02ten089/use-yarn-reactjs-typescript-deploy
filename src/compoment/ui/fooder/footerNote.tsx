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
        {/* fake sau edit tiếng anh */}
        {/* Copyright section */}
        <div className={`${styles.footerSection} ${styles.copyright}`}>
          <p>&copy; 2024 Team S02. All rights reserved.</p>
          <p>Địa chỉ: Tuệ Tĩnh Lai Cách Cẩm Giàng Hải Dương</p>
          <p>Email: hotro@hacnil.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
