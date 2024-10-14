import { Route, Routes, useParams } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const { userId } = useParams();
  return <div>Thông tin người dùng: {userId}</div>;
};

const UseParams: React.FC = () => (
  <Routes>
    <Route path="/user/:userId" element={<UserProfile />} />
  </Routes>
);
// thêm các tham số động vào URL để định tuyến tới các trang chi tiết.