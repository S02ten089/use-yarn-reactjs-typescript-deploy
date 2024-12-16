import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Spinner, Box } from '@chakra-ui/react';

  const CardAbout = React.lazy(() => import('../allInfo'));
  const Trung = React.lazy(()=> import('../index'));
  const AddInfo = React.lazy(()=> import('../addAllInfo'));
//   const CardAbout = React.lazy(() => import('./allInfo'));

  const RouterCard: React.FC = () => {
      return (
          <Box>
            <Suspense fallback={<Spinner />}>
              <Routes>

                <Route path='/trungallinfo' element={<CardAbout/>}/>
                <Route path='/trung' element={<Trung/>}/>
                <Route path='/addinfoall' element={<AddInfo/>}/>
                {/* <Route path="/:link" element={<CardAbout />} /> */}
                
              </Routes>
            </Suspense>
          </Box>
      );
    };
    
    export default RouterCard;