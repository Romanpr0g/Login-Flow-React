import React from "react";
import { Navigate } from "react-router-dom";

const PrivateLoginRoute = ({ element: Element }) => {
  const user = localStorage.getItem("login-user");
  return user ?  <Navigate to="/" /> : <Element />;
};

export default PrivateLoginRoute;
