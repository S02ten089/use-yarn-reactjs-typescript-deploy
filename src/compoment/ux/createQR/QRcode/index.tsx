import React from 'react';
import { QRCodeSVG } from "qrcode.react";

const AppQr: React.FC = () => {
  const qrValue = "https://www.hacnil.com"; // giá trị cho mã QR

  return (
    <div>
      <h1>QR Code svg cho www.hacnil.com </h1>
      <QRCodeSVG value={qrValue} />
    </div>
  );
};

export default AppQr;
