import React from "react";
import AppQr from "./QRcode";
import QRcode from "./QRcode/apiQR";

function QR() {
    return (
      <div className="App">
        <header className="App-header">
          <AppQr/>
        </header>
        <br/>
        <footer>
          <QRcode/>
        </footer>
      </div>
    );
  }
  
  export default QR;