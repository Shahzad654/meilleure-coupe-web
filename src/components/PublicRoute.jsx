import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({ children }) {
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation();

  if (user.email) {
    // Redirect to home if user is already logged in
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
} 