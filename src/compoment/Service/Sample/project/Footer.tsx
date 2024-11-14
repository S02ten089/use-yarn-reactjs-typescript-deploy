import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h4>Khách hàng trải nghiệm</h4>
      <ul>
        {['Khách hàng A', 'Khách hàng B', 'Khách hàng C'].map((customer, index) => (
          <li key={index} className={styles.customerItem}>{customer}</li>
        ))}
      </ul>
      <h5>Đánh giá:</h5>
      <div className={styles.reviews}>
        <p>"Sản phẩm rất tuyệt vời!" - Khách hàng A</p>
        <p>"Dự án này đã giúp tôi rất nhiều." - Khách hàng B</p>
      </div>
    </footer>
  );
};

export default Footer;
