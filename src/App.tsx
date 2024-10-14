import React from 'react';
import ReactDOM from 'react-dom';
// import { AuthProvider } from './hooks/useAuth';
import App from './compoment';

ReactDOM.render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
