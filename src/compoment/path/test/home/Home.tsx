// pages/Home.tsx
import { Box, Input, Button, SimpleGrid, Flex, HStack, Heading, Text } from '@chakra-ui/react';
import ServiceCard from '../../../Service/eng/ServiceCard';
import styles from './home.module.scss';

const TestHome: React.FC = () => {

  return (
    <Box className={styles.home}>
      {/* Hero Section */}
      <Box className={styles.hero}>
        <Heading as="h1" className={styles.title}>Find Your Ideal Service</Heading>
        <Text className={styles.subtitle}>Explore a wide range of services tailored to your needs.</Text>
        <Flex className={styles.search}>
          <Input placeholder="Search Services..." size="lg" />
          <Button colorScheme="blue" size="lg">Search</Button>
        </Flex>
        <HStack spacing={4} className={styles.tags}>
          <Button variant="outline">Popular</Button>
          <Button variant="outline">Trending</Button>
          <Button variant="outline">New Arrivals</Button>
        </HStack>
      </Box>

      {/* Service Cards */}
      <SimpleGrid columns={[1, 2, 3]} spacing={6} mt={8}>
        {/* Map through services to render each card */}
        <ServiceCard title="Web Design" description="Professional web design services." image="/images/web-design.jpg" link='' />
        {/* Additional ServiceCard components here */}
      </SimpleGrid>

      {/* Footer */}
      <Box className={styles.footer}>
        <Text>© 2024 MyWebsite. All rights reserved.</Text>
        <HStack spacing={4}>
          <Text>Privacy Policy</Text>
          <Text>Terms of Service</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default TestHome;
