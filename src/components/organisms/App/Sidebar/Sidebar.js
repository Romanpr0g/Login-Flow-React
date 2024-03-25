import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import wk from "./../../../../assets/img/wk_welcome.png";
import { ReactComponent as House } from "../../../../assets/svg/house.svg";
import { ReactComponent as Teams } from "../../../../assets/svg/teams.svg";
import { ReactComponent as Schedules } from "../../../../assets/svg/schedules.svg";
import { ReactComponent as Settings } from "../../../../assets/svg/settings.svg";
import ClubSelect from "../../../molecules/App/Homepage/ClubSelect/ClubSelect";
import SignOut from "../SignOut/SignOut";
import "./style.css";

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <img src={wk} className="sidebar__img" />
      <ClubSelect />
      <ul className="menu__list">
        <li
          className={`menu__item ${
            location.pathname === "/" ? "active--menu" : ""
          }`}
        >
          <NavLink to="/" className="menu__link">
            <House />
            <span>Home</span>
          </NavLink>
        </li>
        <li
          className={`menu__item ${
            location.pathname.includes("/teams") ? "active--menu" : ""
          }`}
        >
          <NavLink to="/teams" className="menu__link">
            <Teams />
            <span>Teams</span>
          </NavLink>
        </li>
        <li
          className={`menu__item ${
            location.pathname === "/schedules" ? "active--menu" : ""
          }`}
        >
          <NavLink to="/schedules" className="menu__link">
            <Schedules />
            <span>Schedules</span>
          </NavLink>
        </li>
        <li
          className={`menu__item ${
            location.pathname === "/settings" ? "active--menu" : ""
          }`}
        >
          <NavLink to="/settings" className="menu__link">
            <Settings />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
      <div className="menu__signout">
        <SignOut />
      </div>
    </aside>
  );
};
export default Sidebar;
