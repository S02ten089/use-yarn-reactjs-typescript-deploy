"use client"
import React, { useState } from 'react';

const ImageToBase64: React.FC = () => {
  const [base64Image, setBase64Image] = useState<string | null>(null);

  // Hàm xử lý chuyển đổi hình ảnh sang Base64
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Lấy file từ input
    if (file) {
      const reader = new FileReader(); // Tạo FileReader để đọc file

      reader.onloadend = () => {
        // Khi quá trình đọc hoàn tất
        const base64String = reader.result as string;
        setBase64Image(base64String); // Cập nhật state với chuỗi Base64
      };

      reader.readAsDataURL(file); // Đọc file dưới dạng URL (Base64)
    }
  };

  return (
    <div>
      <h1>Chuyển đổi hình ảnh sang Base64</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      
      {base64Image && (
        <div>
          <h2>Base64 Output:</h2>
          <textarea
            style={{ width: '100%', height: '200px' }}
            value={base64Image}
            readOnly
          />
          <h2>Preview Image:</h2>
          {/* <img src={base64Image} alt="Uploaded" style={{ maxWidth: '100%' }} /> */}
        </div>
      )}
    </div>
  );
};

export default ImageToBase64;
