import React from 'react';
import Chat from './chat/chat';
import QR from './ux/emylays/createQR/qr';
// import header
// import fooder

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Chat Application</h1>
      {/* <Chat /> */}
      <QR/>
    </div>
  );
};

export default App;
