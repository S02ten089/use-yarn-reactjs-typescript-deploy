import React from 'react';
import Chat from './chat/chat';
import QR from './ux/createQR/qr';
import ImageToBase64 from './ux/base64/base64';
import Base64ToImage from './ux/base64/base64toimg';
import ExcelReader from './ux/xlsx';

import ImageComponent from '../showimg/test/img';
// import header
import UI from './ui';
// import fooder

const App: React.FC = () => {
  return (
    <div className="App">
      <UI/>
      <h1>Chat Application</h1>
      {/* <Chat /> */}
      <QR/>
      <br />
      <ImageToBase64 />
      <br />
      <Base64ToImage/>
      <br />
      <ExcelReader/>
      <div>
        <ImageComponent/>
      </div>
    </div>
  );
};

export default App;
