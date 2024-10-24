import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box, Spinner } from '@chakra-ui/react';
import React, { Suspense } from 'react';

  const Home = React.lazy(() => import('../ui/header/path/home/Home'));
  const Contact = React.lazy(() => import('../ui/header/path/contact/Contact'));
  const Qr = React.lazy(() => import('../ui/header/path/qr/Qr'));
  const Ux = React.lazy(() => import('../ui/header/path/UX/Ux'));
  
  const RouterSetUp: React.FC = () => {
      return (
        <ChakraProvider>
          <Router>
            {/* Routes với Suspense */}
          <Box p={4}>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/contact" element={<Contact />} />
                <Route path='/qr' element={<Qr/>}/>
                <Route path='/ux' element={<Ux/>}/>
              </Routes>
            </Suspense>
          </Box>
          </Router>
        </ChakraProvider>
      );
    };
    
    export default RouterSetUp;