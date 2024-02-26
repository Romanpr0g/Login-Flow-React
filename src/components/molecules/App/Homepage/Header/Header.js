import React from "react";
import { ReactComponent as Teams } from "../../../../../assets/svg/teams.svg";
import "./style.css";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("login-user"));
  console.log(user.name);
  return (
    <header className="header">
      <h3 className="header__user--name">{user.name + " " + user.surname}</h3>
      <div className="header__user--photo">
        <Teams className="header__user--icon"/>
      </div>
    </header>
  );
};

export default Header;
