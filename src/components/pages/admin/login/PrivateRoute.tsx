import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  // If not authenticated, redirect to login page
  return isAuthenticated ? element : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
