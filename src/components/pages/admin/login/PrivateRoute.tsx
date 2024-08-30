import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Pastikan jalur ini benar

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // Jika pengguna tidak diautentikasi, alihkan ke halaman login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
};

export default PrivateRoute;
