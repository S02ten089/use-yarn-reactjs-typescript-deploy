import React from 'react';
import Header from './header';
import UiCka from './header/useFramWorkCka/uiUseCka';

const UI: React.FC = () => {
  return (
    <div>
      <div>
        <UiCka/>
      </div>
    <div className="App">
      <Header />
        <main>
          <h1>Welcome to My Website</h1>
          {/* Các nội dung khác của trang */}
        </main>
      </div>
    </div>
  );
};

export default UI;
