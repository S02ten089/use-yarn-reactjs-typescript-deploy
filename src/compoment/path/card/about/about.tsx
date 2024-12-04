import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';
import styles from './AboutPage.module.scss';

import { 
  Box, 
  Text,
  Grid,
  
} from '@chakra-ui/react';

// Mock Data (fallback)
const fallbackData = [
  {
    id: 1,
    name: 'John Doe',
    description: 'A passionate software developer.',
    image: 'https://via.placeholder.com/300x150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    description: 'An expert in UI/UX design.',
    image: 'https://via.placeholder.com/300x150',
  },
  {
    id: 3,
    name: 'Michael Brown',
    description: 'Backend developer and API specialist.',
    image: 'https://via.placeholder.com/300x150',
  },
];

const AboutPage: React.FC = () => {
  const [data, setData] = useState<typeof fallbackData>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/users'); // Thay API của bạn vào đây
        if (!response.ok) throw new Error('API không hoạt động');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.warn('Sử dụng fallback data:', error);
        setData(fallbackData); // Dùng fallback nếu API lỗi
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  return (
    <Box>
    <div className={styles.container}>
      {data.map((user) => (
        <CardComponent
          key={user.id}
          name={user.name}
          description={user.description}
          image={user.image}
        />
      ))}
    </div>
    </Box>
  );
};

export default AboutPage;
