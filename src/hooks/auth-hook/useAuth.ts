import { useState } from 'react';

interface AuthContextType {
  token: string | null;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = (): AuthContextType => {
  const [token, setToken] = useState<string | null>(null);

  const signup = async (email: string, password: string) => {
    // Logic signup
  };

  const login = async (email: string, password: string) => {
    // Logic login
  };

  const logout = () => {
    setToken(null);
  };

  return {
    token,
    signup,
    login,
    logout,
  };
};
