"use client"
import axios, { AxiosRequestConfig } from 'axios';
import React, { useEffect } from 'react';

const SearchComponent: React.FC = () => {
  useEffect(() => {
    let isMounted = true; // Biến để theo dõi trạng thái component

    const fetchData = async () => {
      const data = JSON.stringify({
        q: "apple inc",
        location: "Bangkok, Bangkok, Thailand",
        gl: "vn",
        hl: "vi"
      });

      const config: AxiosRequestConfig = {
        method: 'post',
        url: 'https://google.serper.dev/search',
        headers: { 
          'X-API-KEY': '7714433c2b3960ccdb98998caa39c2d5287710ca', 
          'Content-Type': 'application/json'
        },
        data: data
      };

      try {
        const response = await axios(config);
        if (isMounted) {
          console.log(response.data); // Hiển thị kết quả response nếu component vẫn đang được render
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Khi component unmount, set isMounted thành false
    };
  }, []);

  return <div>Check the console for the search result</div>;
};

export default SearchComponent;
