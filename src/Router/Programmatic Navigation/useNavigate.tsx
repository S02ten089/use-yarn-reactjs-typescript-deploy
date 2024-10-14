import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Sau khi đăng nhập thành công, chuyển hướng tới trang chủ
    navigate('/');
  };

  return <button onClick={handleLogin}>Đăng nhập</button>;
};

const DangKy: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Sau khi đăng nhập thành công, chuyển hướng tới trang chủ
    navigate('/');
  };

  return <button onClick={handleLogin}>Đăng nhập</button>;
};

//điều hướng tap mở login