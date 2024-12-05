import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, Box, Spinner } from '@chakra-ui/react';
import React, { Suspense, useEffect, useState } from 'react';
import axios from 'axios';


  const Home = React.lazy(() => import('../path/home/Home'));
  const Contact = React.lazy(() => import('../path/contact/eng/Contact'));
  const Lienhe = React.lazy(() => import('../path/contact/vn/Contact'));
  const Qr = React.lazy(() => import('../path/qr/Qr'));
  const Ux = React.lazy(() => import('../path/UX/Ux'));
  const About = React.lazy(() => import('../path/about/About'));
  const Service = React.lazy(() => import('../path/service/index'));
  const Donate = React.lazy(() => import('../path/Donate/Donate'));
  const Admin = React.lazy(() => import('../path/admin/Admin'));
  const Trung = React.lazy(()=> import('../card/trung/index'));

  const ServiceCard = React.lazy(() => import('../Service/Sample/index'));
  const AboutCard = React.lazy(() => import('../path/card/about/index'));

  const TestLogin = React.lazy(() => import('../path/test/home/homeLogin'));
  const ProductList = React.lazy(() => import('../path/test/paths/ProductList'));
  const TestHome = React.lazy(() => import('../path/test/home/Home'));
 
  
  const RouterSetUp: React.FC = () => {
    
    const [numberApi, setNumberApi] = useState<number | null>(null);
    useEffect(() => {
      const fetchNumber = async () => {
        try {
          const response = await axios.get('https://672964536d5fa4901b6cff4d.mockapi.io/pading/3'); //khong lien ket
          const fetchedNumber = response.data.id;
          setNumberApi(fetchedNumber);
        } catch (error) {
          console.error('Error fetching number:', error);
        }
      };
  
      fetchNumber();
    }, []);

      return (
        <ChakraProvider>
          <Router>
            {/* Routes với Suspense */}
          <Box 
          p={numberApi || 4} //chế độ lồi
          >
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
                <Route path='/donate' element={<Donate/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/trung' element={<Trung/>}/>

                <Route path='/services/card' element={<ServiceCard/>}/>
                <Route path='/about/card' element={<AboutCard/>}/>

                <Route path='/test' element={<TestHome/>}/>
                <Route path='/testLogin' element={<TestLogin/>}/>
                <Route path='/products' element={<ProductList/>}/>
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