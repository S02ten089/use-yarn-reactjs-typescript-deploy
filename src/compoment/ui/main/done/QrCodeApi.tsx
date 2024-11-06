import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Text } from '@chakra-ui/react';
import { QRCodeSVG } from 'qrcode.react';

interface QRCodeData {
  code: string;
}

const QrCodeApi: React.FC = () => {
  const [qrUrl, setQrUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchQrCode = async () => {
      try {
        // const response = await axios.get<QRCodeData>('https://672b5928976a834dd026b579.mockapi.io/Qr/1'); //giảm data nhận vào
        const response = await axios.get<QRCodeData>('https://672b5928976a834dd026b579.mockapi.io/Qr');
        setQrUrl(response.data.code);
      } catch (error) {
        console.error('Error fetching QR code:', error);
      }
    };
    fetchQrCode();
  }, []);

  return (
    <>
      {qrUrl ? (
        <QRCodeSVG value={qrUrl} />
      ) : (
        <Text>Loading QR code...</Text>
      )}
    </>
  );
};

export default QrCodeApi;
