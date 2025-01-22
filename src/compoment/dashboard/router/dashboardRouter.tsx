import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Spinner, Box } from '@chakra-ui/react';


// New imports based on your request
const DashboardHome = React.lazy(() => import('../views/home/homeView'));
// const DashboardAdd = React.lazy(() => import('../views/Address/District/index'));
const App = React.lazy(() => import("../App"));
const Login = React.lazy( ()=> import('../views/login/index'));

const RouterCard: React.FC = () => {
  return (
    <Box>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/tien/dashboard" element={<DashboardHome />} />
          <Route path="/tien/dashboard/*" element={<App />} />
          {/* <Route path="/tien/dashboard/contact" element={<DashboardAdd />} /> */}
          <Route path="/tien/dashboard/login" element={<Login/>} />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default RouterCard;
