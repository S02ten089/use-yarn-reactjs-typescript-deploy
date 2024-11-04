// pages/Service.tsx
import React from 'react';
import { Box, Heading, Input, Button, SimpleGrid, Flex, HStack } from '@chakra-ui/react';
import ServiceCard from '../../Service/eng/ServiceCard';
import styles from './service.module.scss';

const services = [
  { title: 'Web Design', description: 'Professional web design services.', image: '/images/web-design.jpg' },
  { title: 'Server Rental', description: 'Affordable server rentals.', image: '/images/server-rental.jpg' },
  { title: 'Maintenance', description: 'Maintenance for servers, web, and software.', image: '/images/maintenance.jpg' },
  { title: 'Computer Accessories', description: 'Sales and setup of computer accessories.', image: '/images/computer-accessories.jpg' },
  { title: 'Football Apparel', description: 'Wide range of football apparel.', image: '/images/football-apparel.jpg' },
  { title: 'Fashion Accessories', description: 'Trendy fashion accessories.', image: '/images/fashion-accessories.jpg' },
  { title: 'Beauty & Spa Products', description: 'Exclusive beauty and spa products.', image: '/images/beauty-spa.jpg' },
];

const Service: React.FC = () => {
  return (
    <Box className={styles.servicePage} p={5}>
      <Heading as="h1" textAlign="center" className={styles.title}>
        Our Services
      </Heading>
      
      {/* Search Section */}
      <Flex alignItems="center" mt={6} mb={8} className={styles.searchSection}>
        <Input placeholder="Search Services..." size="lg" className={styles.searchInput} />
        <Button colorScheme="blue" size="lg" ml={2} className={styles.searchButton}>Search</Button>
      </Flex>

      {/* Filters */}
      <HStack spacing={4} mb={6} className={styles.filters}>
        <Button variant="outline" colorScheme="blue">Category</Button>
        <Button variant="outline" colorScheme="blue">Recently Added</Button>
        <Button variant="outline" colorScheme="blue">Top Rated</Button>
      </HStack>

      {/* Service Cards */}
      <SimpleGrid columns={[1, 2, 3]} spacing={6} className={styles.grid}>
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} image={service.image} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Service;
