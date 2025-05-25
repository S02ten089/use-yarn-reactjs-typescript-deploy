import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Spinner, Box } from '@chakra-ui/react';

  const CardAbout = React.lazy(() => import('./about/index'));
  // const AboutCardDetail = React.lazy(() => import('./about/index'));
  const AboutCardDetail = React.lazy(() => import('./index'));
  const List = React.lazy(() => import('./list/routerListCard'));
  const ListCard = React.lazy(() => import('./list/index'));

  const RouterCard: React.FC = () => {
      return (
          <Box>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path='/about' element={<CardAbout/>}/>
                <Route path="/:link" element={<AboutCardDetail />} />
                {/* <Route path='/list/*' element={<List/>}/> */}

                <Route path='/' element={<ListCard/>}/>
              </Routes>
            </Suspense>
          </Box>
      );
    };
    
    export default RouterCard;