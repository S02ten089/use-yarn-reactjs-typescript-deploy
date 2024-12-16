import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Spinner, Box } from '@chakra-ui/react';

//   const ServiceCard = React.lazy(() => import('../Service/Sample/index'));
  const CardAbout = React.lazy(() => import('./about/index'));
  const AboutCardDetail = React.lazy(() => import('./about/index'));

  const List = React.lazy(() => import('./list/routerListCard'));

  const RouterCard: React.FC = () => {

      return (
          <Box>
            <Suspense fallback={<Spinner />}>
              <Routes>

                {/* <Route path='/services/card' element={<ServiceCard/>}/> */}
                <Route path='/about' element={<CardAbout/>}/>
                <Route path="/:link" element={<AboutCardDetail />} />
                <Route path='/list/*' element={<List/>}/>

              </Routes>
            </Suspense>
          </Box>
      );
    };
    
    export default RouterCard;