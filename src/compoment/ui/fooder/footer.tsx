import React from 'react';
import styles from './footer.module.scss'; // Import as SCSS module
import Logo from '../../../showimg/logo/logofonthome.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram
  // , FaHome, FaInfoCircle, FaServicestack, FaPhone 

} from 'react-icons/fa';
// import { Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Logo and Navigation Links */}
        <div className={`${styles.footerSection} ${styles.testAlign} ${styles.displayNone}`}>
          <a href='/'> 
            <img src={Logo} alt="Logo" className={styles.footerLogo} />
          </a> 
          {/* <nav className={styles.footerNav}>
            <a href="/" className={styles.display}><FaHome/><Text> {" "}Trang Chủ</Text></a>
            <a href="/about" className={styles.display}><FaInfoCircle /> Giới Thiệu</a>
            <a href="/services"className={styles.display} ><FaServicestack /> Dịch Vụ</a>
            <a href="/contact" className={styles.display}><FaPhone /> Liên Hệ</a>
          </nav> */}
        </div>

        {/* Social Media Links */}
        <div className={`${styles.footerSection} ${styles.testAlign} ${styles.cssMobile}`}>
          <h4>Kết nối với chúng tôi</h4>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter /> Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`${styles.footerSection} ${styles.contactInfo}`}>
          <p>&copy; 2024 Công Ty S02.
            <br/> All rights reserved.</p>
          <p>Địa chỉ: 123 Đường ABC, Quận XYZ, Thành phố HCM</p>
          <p>Email: VTT-S02.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
