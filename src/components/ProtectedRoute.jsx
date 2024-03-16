import React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';

export const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to="/login" replace />;
  
};

