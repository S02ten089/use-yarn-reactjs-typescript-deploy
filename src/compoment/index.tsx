import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, Box, Spinner } from '@chakra-ui/react';
import React, { Suspense } from 'react';

  const Web = React.lazy(() => import('./router-setup/index'));

  const Dashboard = React.lazy(() => import('./dashboard/index'));

  // const Test = React.lazy(() => import('../path/test/routerTest'));
  
  const RouterShare: React.FC = () => {
      return (
        <ChakraProvider>
          <Router>
            {/* Routes với Suspense */}
            <Box >
              <Suspense fallback={<Spinner />}>
                <Routes>
                  <Route path="/" element={<Web />} />

                  {/* <Route path='/test/*' element={<Test/>}/> */}

                  <Route path='/*' element={<Dashboard/>}/>

                    {/* Chuyển hướng tất cả các đường dẫn không hợp lệ về trang chủ */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </Suspense>
            </Box>
          </Router>
        </ChakraProvider>
      );
    };
    
    export default RouterShare;