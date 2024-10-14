import React from 'react';
import { useAuth } from '../../hooks/auth-hook/useAuth';

const AuthComponent: React.FC = ({ children }:string|any) => {
  const auth = useAuth();

  return (
    <div>
      {auth.token ? 'User is logged in' : 'User is not logged in'}
      {children}
    </div>
  );
};

export default AuthComponent;
