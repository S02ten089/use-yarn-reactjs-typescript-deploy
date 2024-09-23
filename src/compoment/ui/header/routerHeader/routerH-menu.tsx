import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider, Box, Flex, Button, Spinner } from '@chakra-ui/react';

// import Home from '../menu/home/Home';
// import Contact from '../menu/contact/Contact';
import React, { Suspense } from 'react';

const Home = React.lazy(() => import('../menu/home/Home'));
const Contact = React.lazy(() => import('../menu/contact/Contact'));

const RouterH: React.FC = () => {
    return (
      <ChakraProvider>
        <Router>
          {/* Header navigation */}
          <Box bg="teal.500" p={4}>
            <Flex justify="space-between" align="center">
              <Box fontSize="2xl" color="white">
                {/* Logo */}
              <Link to="/">Logo</Link>
              </Box>
              <Flex>
                <Button variant="link" color="white" mx="2">
                  <Link to="/">Trang Chủ</Link>
                </Button>
                <Button variant="link" color="white" mx="2">
                  <Link to="/about">Giới Thiệu</Link>
                </Button>
                <Button variant="link" color="white" mx="2">
                  <Link to="/contact">Liên Hệ</Link>
                </Button>
              </Flex>
            </Flex>
          </Box>
  
          {/* Routes với Suspense */}
        <Box p={4}>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} /> */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Box>
        </Router>
      </ChakraProvider>
    );
  };
  
  export default RouterH;