// components/ServiceCard.tsx
import React from 'react';
import { Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import styles from './serviceCard.module.scss';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link:string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image,link }) => {
  return (
    <Box className={styles.card} boxShadow="lg" p={5} rounded="md" overflow="hidden">
      <Image src={image} alt={title} className={styles.image} />
      <Heading as="h3" size="md" mt={3} className={styles.title}>{title}</Heading>
      <Text mt={2} className={styles.description}>{description}</Text>
      <Button colorScheme="blue" variant="solid" mt={4} className={styles.button}
      onClick={() => window.open(link?? " cardEng ero")} // Open link in a new tab
      >
        Learn More</Button>
    </Box>
  );
};

export default ServiceCard;
