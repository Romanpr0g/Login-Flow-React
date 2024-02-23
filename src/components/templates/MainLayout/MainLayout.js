import React from 'react';
import './style.css';
import Sidebar from '../../molecules/Sidebar/Sidebar';


const MainLayout = ({children}) => {
  return (
    <div className="app-container">
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;