import React, { useState } from 'react';

const Base64ToImage: React.FC = () => {
  const [base64String, setBase64String] = useState<string>('');
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleBase64InputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBase64String(e.target.value);
  };

  const handleConvertToImage = () => {
    // Kiểm tra nếu chuỗi base64 không trống
    if (base64String) {
      setImageSrc(`data:image/jpeg;base64,${base64String}`);
      // Bạn có thể thay đổi image/jpeg thành image/png hoặc loại hình ảnh tương ứng
    }
  };

  return (
    <div>
      <h1>Chuyển đổi Base64 sang Hình ảnh</h1>
      <textarea
        rows={10}
        cols={50}
        value={base64String}
        onChange={handleBase64InputChange}
        placeholder="Nhập chuỗi Base64 ở đây"
      />
      <br />
      <button onClick={handleConvertToImage}>Chuyển đổi sang hình ảnh</button>
      <br />
      {imageSrc && (
        <div>
          <h2>Hình ảnh được chuyển đổi:</h2>
          <img src={imageSrc} alt="Base64" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default Base64ToImage;
