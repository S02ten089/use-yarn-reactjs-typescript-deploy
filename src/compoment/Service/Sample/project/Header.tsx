import React from 'react';
import styles from '../styles/Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.productSlider}>
        <ul className={styles.sliderList}>
          {['Sản phẩm 1', 'Sản phẩm 2', 'Sản phẩm 3', 'Sản phẩm 4'].map((item, index) => (
            <li key={index} className={styles.sliderItem}>{item}</li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
