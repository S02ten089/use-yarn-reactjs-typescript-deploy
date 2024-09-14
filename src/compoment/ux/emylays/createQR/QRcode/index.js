import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const AppQr = () => {
  return (
    <div>
      <h1>QR Code cho www.abc.vn</h1>
      <QRCodeSVG value="https://www.abc.vn" />
    </div>
  );
};

export default AppQr;
