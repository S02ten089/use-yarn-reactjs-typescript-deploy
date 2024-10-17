import React from 'react';
// import Chat from './chat/chat';
import QR from './ux/createQR/qr';
import ImageToBase64 from './ux/base64/base64';
import Base64ToImage from './ux/base64/base64toimg';
import ExcelReader from './ux/xlsx';
// import { Circle } from './ux/mapGoogle/circle';
import ImageComponent from '../showimg/test/img';
import Ero from '../notification/null/Ero';
import MapGoogle from './map';
// import header
import UI from './ui';
// import fooder
import ModeDarkLight from './ux/darkLight';

const App: React.FC = () => {
  return (
    <div className="App">
      <UI/>
      <h1>Chat Application</h1>
      {/* <Chat /> */}
      <ModeDarkLight/>
      <br />
      <QR/>
      <br />
      <ImageToBase64 />
      <br />
      <Base64ToImage/>
      <br />
      <ExcelReader/>
      <br />
      {/* Ero -- Wanting
      <Circle/> */}
      <br />
      <Ero/>
      <br />
      <MapGoogle/>
      <div>
        <ImageComponent/>
      </div>
    </div>
  );
};

export default App;
