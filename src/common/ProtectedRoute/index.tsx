import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  const user = { loggedIn: false }; // 替换为实际的认证逻辑
  return user && user.loggedIn;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;