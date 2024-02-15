import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerificationCard from "../../templates/VerificationCard/VerificationCard";
import LogInCard from "../../templates/LogInCard/LoginInCard";
import wk from "./../../../assets/img/wk_welcome.png";
import "./style.css";

const LoginFlow = () => {
  return (
    <div className="login-flow__page">
      <img src={wk} className="welcome--img" />
      <div className="login-flow__card">
        <Router>
          <Routes>
            <Route path="/" element={<LogInCard />} />
            <Route path="/verify" element={<VerificationCard />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default LoginFlow;
