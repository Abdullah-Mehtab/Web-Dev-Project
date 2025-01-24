// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const loggedInUser = localStorage.getItem('loggedInUser');

  if (!loggedInUser) {
    // Show alert
    alert('Please log in first!');
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
