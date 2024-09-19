import React from 'react';
import './Header.scss'; // Import your SASS styles

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://via.placeholder.com/150" alt="Logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#home">Trang Chủ</a></li>
          <li><a href="#about">Giới Thiệu</a></li>
          <li><a href="#services">Dịch Vụ</a></li>
          <li><a href="#contact">Liên Hệ</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">Đăng Nhập</button>
        <button className="signup-btn">Đăng Ký</button>
      </div>
    </header>
  );
};

export default Header;
