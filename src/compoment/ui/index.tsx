import React from 'react';
import Header from './header';
import UiUseCka from './header/UiUseFramworkCka/App';
import RouterH from './header/routerHeader/routerH-menu';

const UI: React.FC = () => {
  return (
    <div>
      <div>
        <UiUseCka/>
      </div>
      <br />
      <div className="App">
        <Header />
        <main>
          <h1>Welcome to My Website</h1>
          {/* Các nội dung khác của trang */}
        </main>
      </div>
      <div>
        <p>use router + framwork cka</p>
        <RouterH></RouterH>
      </div>
    </div>
  );
};

export default UI;
