import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logout } from "../../../../assets/svg/logout.svg";
import "./style.css";

const SignOut = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    localStorage.removeItem("login-user");
    navigate("/login");
  };
  return (
    <button className="signout--button" onClick={handleButtonClick}>
      <Logout />
      <span>Sign Out</span>
    </button>
  );
};

export default SignOut;
