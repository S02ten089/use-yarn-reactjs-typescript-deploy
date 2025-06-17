import React, { useEffect, useState } from 'react';
import styles from './done.module.scss';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, filter } from '@chakra-ui/react';
// import QRCode from 'qrcode.react'; // Thêm thư viện để tạo QR Code
import QR from '../../../../showimg/img/qr.png'
import QrCodeApi from './QrCodeApi';
import axios from "axios";

interface Entry {
  id: number;
  name: string;
  amount: string;
}

const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_LINK_SERVER || "",
  ENDPOINTS: {
    POST_LINK: process.env.REACT_APP_API_LINK_GET_BOARD_DONE || "",
  },
};

const DonePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [supporters, setSupporters] = useState<Entry[]>([]);
  const [salls, setSalls] = useState<Entry[]>([]);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const onOff = "none"; // Biến này có thể được sử dụng để điều khiển hiển thị của ModalHeader
  useEffect(() => {
    axios.get(`${API_CONFIG.BASE_URL}/database/${API_CONFIG.ENDPOINTS.POST_LINK}`)
      .then(res => {
        setSupporters(res.data.supporters);
        setSalls(res.data.salls);
      })
      .catch(err => {
        console.error("Lỗi khi tải dữ liệu:", err);
      });
  }, []);
  return (
    <div className={styles.donePage}>
      <Box className={styles.content}>
        <h1 className={styles.title}>Cảm ơn bạn đã ủng hộ!</h1>
        <p className={styles.description}>
          Chúng tôi rất vui khi nhận được sự ủng hộ từ bạn. Với sự giúp đỡ của bạn, chúng tôi có thể phát triển cộng đồng và cung cấp thêm nhiều tiện ích cho người dùng.
        </p>
        <Button colorScheme="teal" onClick={openModal}>
          Hỗ trợ ngay
        </Button>
      </Box>
      
      <Box className={styles.supportersList}>
        <h1>Danh sách ủng hộ</h1>
        <ul>
          {supporters.map((supporter) => (
            <li key={supporter.id} className={styles.supporterItem}>
              {supporter.name} - {supporter.amount}
            </li>
          ))}
        </ul>
      </Box>
      <Box className={styles.supportersList}>
        <h1>
          Danh sách số tiền chi trả sử dụng
        </h1>
        <ul>
          {salls.map((sall) => (
            <li key={sall.id} className={styles.supporterItem}>
              {sall.name} - {sall.amount}
            </li>
          ))}
        </ul>
      </Box>
      <Box>
        <h1>
          Bảng Thống Kê(đang update)
          sử dụng biểu đồ dashboard 
        </h1>
      </Box>

      {/* Pop-up cho QR Code */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
          display={onOff}
          >Quét mã QR để ủng hộ</ModalHeader>
          <ModalCloseButton 
          display={onOff}
          />
          <ModalBody>
            <h1
            style={{ display: onOff }}
            >
              Tạm sử dụng hình ảnh qr - update(call api ví dụ: /qr)
            </h1>
            <img src={QR}
            style={{filter: "brightness(17) contrast(3)"}}></img>
            <QrCodeApi
            
            />
            {/* <QRCode value="https://example.com/support" size={256} /> */}
            <p className={styles.qrText}
            style={{ display: onOff }}
            >Quét mã QR này để ủng hộ cho chúng tôi!</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DonePage;
