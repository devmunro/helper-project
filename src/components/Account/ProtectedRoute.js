import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, setMessage } = UserAuth();
  if (!user) {
    setMessage(true)
    return <Navigate to="/helper-project" />;
  }
  return children;
};

export default ProtectedRoute;
