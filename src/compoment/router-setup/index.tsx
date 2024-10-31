import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, Box, Spinner } from '@chakra-ui/react';
import React, { Suspense } from 'react';

  const Home = React.lazy(() => import('../path/home/Home'));
  const Contact = React.lazy(() => import('../path/contact/eng/Contact'));
  const Lienhe = React.lazy(() => import('../path/contact/vn/Contact'));
  const Qr = React.lazy(() => import('../path/qr/Qr'));
  const Ux = React.lazy(() => import('../path/UX/Ux'));
  const About = React.lazy(() => import('../path/about/About'));
  const Service = React.lazy(() => import('../path/service/service'));


  const TestHome = React.lazy(() => import('../path/test/home/Home'));
  
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
                <Route path="/lienhe" element={<Lienhe />} />
                <Route path='/qr' element={<Qr/>}/>
                <Route path='/ux' element={<Ux/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Service/>}/>
                <Route path='/abc' element={<Home/>}/>

                <Route path='/test' element={<TestHome/>}/>
                  {/* Chuyển hướng tất cả các đường dẫn không hợp lệ về trang chủ */}
                  <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
          </Box>
          </Router>
        </ChakraProvider>
      );
    };
    
    export default RouterSetUp;