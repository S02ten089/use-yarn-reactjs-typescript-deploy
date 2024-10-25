import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact';

const AppContact: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/lienhe" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppContact;
