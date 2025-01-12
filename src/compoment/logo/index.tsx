import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';
import axios from 'axios';
import Logo from '../../showimg/logo/logofonthome.png'
const LogoComponent = () => {
  const [logoUrl, setLogoUrl] = useState(Logo); // Đặt logo mặc định

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const LogoApi = process.env.REACT_APP_Demo_APP_API_URL2 || "lỗi Logo";
        const response = await axios.get(LogoApi);
        if (response.data.logoUrl) {
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