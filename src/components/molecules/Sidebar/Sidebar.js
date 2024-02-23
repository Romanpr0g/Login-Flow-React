import React from 'react';
import wk from "./../../../assets/img/wk_welcome.png";
import './style.css';

const Sidebar = ({ children }) => (
  <aside className="sidebar">
    <img src={wk} className="sidebar__img" />
    {children}
    </aside>
);

export default Sidebar;