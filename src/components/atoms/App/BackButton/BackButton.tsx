import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Arrow } from "../../../../assets/svg/arrow.svg";
import "./style.scss"

type BackButtonProps = {
  to: string;
  name: string;
  style?: {};
};

const BackButton: React.FC<BackButtonProps> = ({ to, name, style }) => {
  return (
    <NavLink to={to} className="btn--back" style={style}>
      <Arrow className="back__img" />
      <span className="btn--back__text">{name}</span>
    </NavLink>
  );
};

export default BackButton;
