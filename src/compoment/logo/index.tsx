import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';
import axios from 'axios';
import Logo from '../../showimg/logo/logofonthome.png'
const LogoComponent = () => {
  const [logoUrl, setLogoUrl] = useState(Logo); // Đặt logo mặc định

  useEffect(() => {
    const fetchLogo = async () => {
      const apiUrl = process.env.REACT_APP_URL_API_LOGO || ''; // Đảm bảo dùng đúng biến môi trường
      if (!apiUrl) {
        console.error('API URL không được định nghĩa.');
        return;
      }

      try {
        const response = await axios.get(apiUrl);
        if (response.data && response.data.logoUrl) {
          setLogoUrl(response.data.logoUrl); // Cập nhật logoUrl nếu API trả về
        }
      } catch (error) {
        console.error('Lỗi khi lấy logo:', error);
      }
    };

    fetchLogo();
  }, []);

  return (
    <div>
      <Image src={logoUrl} alt="Logo" />
    </div>
  );
};

export default LogoComponent;
