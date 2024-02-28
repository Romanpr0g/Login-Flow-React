import React from "react";
import { Navigate } from "react-router-dom";

const PrivateHomepageRoute = ({ element: Element }) => {
  const user = localStorage.getItem("login-user");
  return user ? <Element /> : <Navigate to="/login" />;
};

export default PrivateHomepageRoute;
