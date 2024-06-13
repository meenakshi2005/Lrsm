import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
