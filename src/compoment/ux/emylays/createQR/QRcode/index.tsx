import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const AppQr: React.FC = () => {
  const qrValue = "https://www.vtt-s02.com"; // giá trị cho mã QR

  return (
    <div>
      <h1>QR Code svg cho www.vtt-s02.com </h1>
      <QRCodeSVG value={qrValue} />
    </div>
  );
};

export default AppQr;
