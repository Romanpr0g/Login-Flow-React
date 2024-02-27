import React from "react";
import { Outlet } from "react-router-dom";
import wk from "../../../../assets/img/wk_welcome.png";
import "./style.css";

const LoginFlow = () => {
  return (
    <div className="login-flow__page">
      <img src={wk} className="welcome--img" />
      <div className="login-flow__card">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginFlow;
