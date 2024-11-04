import React from 'react';
// import Chat from './chat/chat';
import QR from './createQR/qr';
import ImageToBase64 from './base64/base64';
import Base64ToImage from './base64/base64toimg';
import ExcelReader from './xlsx';
// import { Circle } from './ux/mapGoogle/circle';
import ImageComponent from '../../showimg/test/img';
import Ero from '../../notification/null/Ero';
import MapGoogle from '../map';
// import header
// import UI from './ui';
// import fooder

//===//
import ModeDarkLight from './darkLight';
//===//

const Ux: React.FC = () => {
  return (
    <div className="App">
      {/* <UI/> */}
      <h1>Chat Application</h1>
      <ModeDarkLight/>
      <br />
      {/* <Chat /> */}
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

export default Ux;
