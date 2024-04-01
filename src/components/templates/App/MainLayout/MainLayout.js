import React from 'react';
import { Outlet } from "react-router-dom";
import './style.css';
import Sidebar from '../../../organisms/App/Sidebar/Sidebar';


const MainLayout = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <Outlet/>
    </div>
  );
};

export default MainLayout;