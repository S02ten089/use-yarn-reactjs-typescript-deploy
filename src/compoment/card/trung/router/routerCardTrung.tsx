import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Spinner, Box } from '@chakra-ui/react';

  const CardAbout = React.lazy(() => import('../allInfo'));
//   const CardAbout = React.lazy(() => import('./allInfo'));

  const RouterCard: React.FC = () => {
      return (
          <Box>
            <Suspense fallback={<Spinner />}>
              <Routes>

                <Route path='/trungallinfo' element={<CardAbout/>}/>
                {/* <Route path="/:link" element={<CardAbout />} /> */}
                
              </Routes>
            </Suspense>
          </Box>
      );
    };
    
    export default RouterCard;