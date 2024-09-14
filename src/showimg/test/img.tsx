import React from 'react';
import exampleImage from '../img/test.png'; // Đường dẫn tới ảnh trong thư mục src

const ImageComponent: React.FC = () => {
  return (
    <div>
      <h1>Hiển thị ảnh từ dự án</h1>
      <img src={exampleImage} alt="Example" style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default ImageComponent;
