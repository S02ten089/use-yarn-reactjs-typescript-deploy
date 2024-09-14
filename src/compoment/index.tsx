import React from 'react';
import Chat from './chat/chat';
import QR from './ux/emylays/createQR/qr';
import ImageToBase64 from './ux/emylays/base64/base64';
import Base64ToImage from './ux/emylays/base64/base64toimg';

import ImageComponent from '../showimg/test/img';
// import header
// import fooder

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Chat Application</h1>
      {/* <Chat /> */}
      <QR/>
      <ImageToBase64 />
      <Base64ToImage/>
      <div>
        <ImageComponent/>
      </div>
    </div>
  );
};

export default App;
