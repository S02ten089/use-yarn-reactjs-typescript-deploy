import React from 'react';
import styles from './header.module.scss';
import ModalDangNhap from '../../../auth/ui/cka/login';
import ModalDangKy from '../../../auth/ui/cka/register';

const BoxLG: React.FC = () => {

  return (
    
      <div className={styles.authButtons}>
        <button className={styles.loginBtn}>
          <ModalDangNhap />
        </button>
        <button className={styles.signupBtn}>
          <ModalDangKy/>
          {/* Đăng Ký */}
        </button>
      </div>
      
  );
};

export default BoxLG;
