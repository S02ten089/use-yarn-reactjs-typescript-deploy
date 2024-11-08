// pages/Service.tsx
import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  SimpleGrid,
  Flex,
  HStack,
  Text,
  useToast,
  VStack,
  Divider,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';
import { FaSearch, FaFilter, FaStar, FaCalendarAlt } from 'react-icons/fa';
import ServiceCard from '../../Service/eng/ServiceCard';
import styles from './service.module.scss';

const services = [
  { title: 'Web Design', description: 'Professional web design services.', image: '/images/web-design.jpg', link:'http://shopify.vtt-s02.com' },
  { title: 'Server Rental', description: 'Affordable server rentals.', image: '/images/server-rental.jpg', link:'' },
  { title: 'Maintenance', description: 'Maintenance for servers, web, and software.', image: '/images/maintenance.jpg' ,link:''},
  { title: 'Computer Accessories', description: 'Sales and setup of computer accessories.', image: '/images/computer-accessories.jpg',link:'' },
  { title: 'Football Apparel', description: 'Wide range of football apparel.', image: '/images/football-apparel.jpg', link:'' },
  { title: 'Fashion Accessories', description: 'Trendy fashion accessories.', image: '/images/fashion-accessories.jpg', link:'' },
  { title: 'Beauty & Spa Products', description: 'Exclusive beauty and spa products.', image: '/images/beauty-spa.jpg', link:'' },
];

const Service: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(services);
  const toast = useToast();

  const handleSearch = () => {
    const results = services.filter(service => 
      service.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredServices(results);

    if (results.length === 0) {
      toast({
        title: 'No results found.',
        description: `No services matched your search: "${searchQuery}"`,
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleFilterCategory = () => {
    const categoryFiltered = services.filter(service => service.title.includes("Accessories"));
    setFilteredServices(categoryFiltered);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setFilteredServices(services);
  };

  return (
    <Box backgroundColor='black'
    bgGradient={[
      'linear-gradient(to bottom, #a2d0fa, #000000, #000000, #000000, #0d071a, #282c34)'
      // 'linear(to-tr, teal.300, yellow.400)',
      // 'linear(to-t, blue.200, teal.500)',
      // 'linear(to-b, orange.100, purple.300)',
    ]}
    >
    <Box className={styles.servicePage} p={5} maxW="1200px" mx="auto" backgroundColor='currentColor'
    borderRadius='59px'
    boxShadow='rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px'
    >
      <Heading as="h1" textAlign="center" className={styles.title} mb={6}>
        Our Services
      </Heading>
      {/* currentColor */}
      <Flex alignItems="center" mb={6} className={styles.searchSection}>
        <Input
          placeholder="Search Services..."
          size="lg"
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          color='#63b3ed'
        />
        <Button onClick={handleSearch} colorScheme="blue" size="lg" ml={2} className={styles.searchButton}>
          <FaSearch /> {" "} Search
        </Button>
      </Flex>

      <VStack align="start" spacing={3} mb={6}>
        <Button onClick={onToggle} variant="outline" colorScheme="blue" size="sm" leftIcon={<FaFilter />}>
          Toggle Filters
        </Button>
        <Collapse in={isOpen} animateOpacity>
          <HStack spacing={4} className={styles.filters}>
            <Button onClick={handleFilterCategory} variant="solid" colorScheme="blue">
              Category: Accessories
            </Button>
            <Button onClick={() => setFilteredServices([...filteredServices].sort((a, b) => a.title.localeCompare(b.title)))} 
                    variant="outline" 
                    colorScheme="blue" 
                    leftIcon={<FaStar />}>
              Top Rated
            </Button>
            <Button onClick={() => setFilteredServices([...filteredServices].sort((a, b) => Date.parse(a.title) - Date.parse(b.title)))} 
                    variant="outline" 
                    colorScheme="blue" 
                    leftIcon={<FaCalendarAlt />}>
              Recently Added
            </Button>
            <Button onClick={handleResetFilters} colorScheme="red" variant="ghost">
              Reset
            </Button>
          </HStack>
        </Collapse>
      </VStack>

      <Divider my={6} />

      <SimpleGrid columns={[1, 2, 3]} spacing={6} className={styles.grid}>
        {filteredServices.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} image={service.image} link={`${service.link} ${''}`} />
        ))}
      </SimpleGrid>

      {filteredServices.length === 0 && (
        <Text textAlign="center" mt={10} fontSize="lg" color="gray.500">
          No services available. Try adjusting your filters.
        </Text>
      )}
    </Box>
    </Box>
  );
};

export default Service;
