import { createContext } from 'react';

// Định nghĩa kiểu cho context
interface AuthContextType {
  token: string | null;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Tạo AuthContext và export nó
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
