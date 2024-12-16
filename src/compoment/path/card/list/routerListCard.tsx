import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Spinner, Box } from '@chakra-ui/react';

  const ListAbout = React.lazy(() => import('./about/AboutListPage'));
  
  const RouterCard: React.FC = () => {

      return (
          <Box>
            <Suspense fallback={<Spinner />}>
              <Routes>

                <Route path='/about' element={<ListAbout/>}/>

              </Routes>
            </Suspense>
          </Box>
      );
    };
    
    export default RouterCard;