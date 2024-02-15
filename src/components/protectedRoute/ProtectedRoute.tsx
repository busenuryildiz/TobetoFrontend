import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }: any) => {
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };

export default ProtectedRoute;