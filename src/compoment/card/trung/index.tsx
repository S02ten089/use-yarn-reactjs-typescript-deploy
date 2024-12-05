import React from 'react';
import './trung.scss';
import avt_img from './img/avt_trung.jpg';

function Trung() {
    return (
        <div className="Trung">
            {/* Phần tiêu đề nổi bật */}
            <div className="header">
                <h1>Phung Hai Trung</h1>
                <div className="line-top"></div>
            </div>

            {/* Phần chính chứa ảnh và thông tin */}
            <div className="main">
                <div className="img">
                    <img src={avt_img} alt="Avatar" />
                </div>

                {/* Thanh nối ngang giữa ảnh và thông tin */}
                <div className="timeline-line"></div>

                <div className="info_trung">
                    <p>Birthday: 29/03/2002</p>
                    <p>PRGM: PHP, React, Python, Java</p>
                    <p>Contact: Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>

            {/* Thanh nối dưới cùng */}
            <div className="line-bottom"></div>

            {/* Nút Show Info All */}
            <a href="#" className="show-info">
                Show Info All
            </a>
        </div>
    );
}

export default Trung;