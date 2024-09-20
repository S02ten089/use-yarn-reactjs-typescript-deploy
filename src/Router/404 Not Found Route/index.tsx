import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from '';
// import About from '';


const NotFound: React.FC = () => <h2>Trang không tồn tại!</h2>;

const Home: React.FC = () => <h1>Trang Chủ</h1>;
const About: React.FC = () => <h1>Ghi Chú</h1>;

const App: React.FC = () => (

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
