import React from "react";
import LogInCard from "../../templates/LogInCard/LoginInCard";
import wk from "./../../../assets/img/wk_welcome.png";
import "./style.css"


const LoginFlow = () => {
  return (
    <div className="login-flow__page">
      <img src={wk} className="welcome--img" />
      <div className="login-flow__card">
        <LogInCard />
      </div>
    </div>
  );
};

export default LoginFlow;
