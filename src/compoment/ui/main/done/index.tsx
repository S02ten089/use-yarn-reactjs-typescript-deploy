import React, { useState } from 'react';
import styles from './done.module.scss';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
// import QRCode from 'qrcode.react'; // Thêm thư viện để tạo QR Code
import QR from '../../../../showimg/img/qr.png'
import QrCodeApi from './QrCodeApi';

const DonePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Dữ liệu giả cho danh sách ủng hộ
  const supporters = [
    { id: 1, name: "Nguyễn Quang Linh", amount: "100.000$" },
    { id: 2, name: "Vũ Thanh Hùng", amount: "100$" },
    { id: 3, name: "Vũ Trọng Tiến", amount: "100.000 VNĐ" },
    { id: 4, name: "Phạm Thị D", amount: "250.000 VNĐ" },
  ];
  const salls = [
    { id: 1, name: "Duy Trì Serve", amount: "100.000VND/1mon" },
    { id: 2, name: "Duy Trì Domain", amount: "100$/1year" },
    { id: 3, name: "Tiền đi chơi tiền bỉm sữa", amount: "100.000 VNĐ" },
    { id: 4, name: "Phần Mềm Sử Dụng", amount: "250.000 VNĐ" },
    { id: 5, name: "Logo", amount: "" },
  ];

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
          <ModalHeader>Quét mã QR để ủng hộ</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>
              Tạm sử dụng hình ảnh qr - update(call api ví dụ: /qr)
            </h1>
            <img src={QR}></img>
            <QrCodeApi/>
            {/* <QRCode value="https://example.com/support" size={256} /> */}
            <p className={styles.qrText}>Quét mã QR này để ủng hộ cho chúng tôi!</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DonePage;
