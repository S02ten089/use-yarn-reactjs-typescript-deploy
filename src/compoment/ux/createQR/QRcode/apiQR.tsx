"use client"
import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';  // Sử dụng QRCodeSVG thay vì QRCodeCanvas
import "../css/qrcode/qrcode.css";

// Định nghĩa kiểu dữ liệu cho mỗi item trong danh sách linkDataList
interface LinkData {
  id: string;
  nameLinkQR: string;
  type: string;
}

const QRcode: React.FC = () => {
  const [linkDataList, setLinkDataList] = useState<LinkData[]>([]);  // Khai báo kiểu dữ liệu cho state

  useEffect(() => {
    // Giả sử API của bạn có endpoint là /api/getLinks
    fetch('https://66d8a62b37b1cadd805550b7.mockapi.io/QRcode')
      .then(response => response.json())
      .then(data => {
        setLinkDataList(data);
      })
      .catch(error => {
        console.error('Error fetching the API:', error);
      });
  }, []);

  return (
    <div className="qr-container">
      <h1>Danh sách mã QR từ API</h1>
      {linkDataList.length > 0 ? (
        linkDataList.map((item) => (
          <div key={item.id} className="qr-item">
            <div className="qr-code-wrapper">
              {/* Sử dụng QRCodeSVG thay vì QRCodeCanvas */}
              <QRCodeSVG value={item.nameLinkQR} className="qr-code" />
            </div>
            <div className="qr-info">
              <h2 className="qr-id">ID: {item.id}</h2>
              <h3 className="qr-type">Type: {item.type}</h3>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QRcode;
