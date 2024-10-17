import React from 'react';
import ReactDOM from 'react-dom';
// import { AuthProvider } from './hooks/useAuth';
import App from './compoment';

//===//
import { createRoot } from 'react-dom/client'; // Đúng import từ react-dom/client
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
const config = {
  initialColorMode: "light", // Chế độ khởi đầu
  useSystemColorMode: false, // Không dùng chế độ theo hệ thống
};
const theme = extendTheme({ config });
// Sử dụng createRoot từ react-dom/client
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container); // Tạo root từ container
  root.render(
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  );
}
//===//

//
ReactDOM.render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
