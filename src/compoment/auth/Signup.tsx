import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth-hook/useAuth';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(email, password);
      // Có thể tự động đăng nhập người dùng sau khi đăng ký thành công
    } catch (error) {
      console.error('Lỗi đăng ký:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Đăng ký</button>
    </form>
  );
};

export default Signup;
