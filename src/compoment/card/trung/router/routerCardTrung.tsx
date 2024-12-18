import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Spinner, Box } from '@chakra-ui/react';

  const CardAbout = React.lazy(() => import('../allInfo'));
  const Trung = React.lazy(()=> import('../index'));
  const AddInfo = React.lazy(()=> import('../addAllInfo'));
  const Dashboard = React.lazy(()=> import('../dashboard/index'));
  const ManagerCardInfo = React.lazy(()=> import('../dashboard/managerAllinfo'));
//   const CardAbout = React.lazy(() => import('./allInfo'));

  const RouterCard: React.FC = () => {
      return (
          <Box>
            <Suspense fallback={<Spinner />}>
              <Routes>

                <Route path='/trungallinfo' element={<CardAbout/>}/>
                <Route path='/' element={<Trung/>}/>
                <Route path='/addinfoall' element={<AddInfo/>}/>
                <Route path="/:link" element={<CardAbout />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/managertrung" element={<ManagerCardInfo />} />
              </Routes>
            </Suspense>
          </Box>
      );
    };
    
    export default RouterCard;