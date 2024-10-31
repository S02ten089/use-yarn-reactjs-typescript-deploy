import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';
import axios from 'axios';
import Logo from '../../showimg/logo/logofonthome.png'
const LogoComponent = () => {
  const [logoUrl, setLogoUrl] = useState(Logo); // Đặt logo mặc định

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await axios.get('URL_API_CUA_BAN'); // Thay thế URL_API_CUA_BAN bằng URL API của bạn
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
