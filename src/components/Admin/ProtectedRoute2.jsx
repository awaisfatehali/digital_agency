import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute2 = ({ children }) => {
  const adminLoggedIn =
    localStorage.getItem("adminLoggedIn") === "true";

  if (adminLoggedIn) {
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
};

export default ProtectedRoute2;