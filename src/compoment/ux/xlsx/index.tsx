"use client"
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelReader: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const binaryStr = e.target?.result;
        const workbook = XLSX.read(binaryStr, { type: 'binary' });

        // Đọc dữ liệu từ sheet đầu tiên
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setData(jsonData); // Lưu dữ liệu đọc được vào state
      };

      reader.readAsBinaryString(file);
    }
  };

  return (
    <div>
      <h1>Đọc file Excel (.xlsx)</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>
                    {String(value)}
                    {/* {typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value)} */}
                  </td> // Hiển thị giá trị
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExcelReader;
