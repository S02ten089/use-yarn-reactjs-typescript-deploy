import React from 'react';
import Header from './header';

const UI: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to My Website</h1>
        {/* Các nội dung khác của trang */}
      </main>
    </div>
  );
};

export default UI;
