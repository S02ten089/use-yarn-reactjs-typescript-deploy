import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('../../compoment/ui'));
const About = lazy(() => import('../../compoment/Contact/index'));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;

//loding từng phần