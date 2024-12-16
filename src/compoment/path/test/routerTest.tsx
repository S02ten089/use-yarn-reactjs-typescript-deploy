import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Spinner, Box } from '@chakra-ui/react';

  const TestLogin = React.lazy(() => import('./home/homeLogin'));
  const ProductList = React.lazy(() => import('./paths/ProductList'));
  const TestHome = React.lazy(() => import('./home/Home'));

  const RouterTest: React.FC = () => {
      return (
          <Box>
            <Suspense fallback={<Spinner />}>
              <Routes>

                <Route path='/test' element={<TestHome/>}/>
                <Route path='/testLogin' element={<TestLogin/>}/>
                <Route path='/products' element={<ProductList/>}/>
                
              </Routes>
            </Suspense>
          </Box>
      );
    };
    
    export default RouterTest;