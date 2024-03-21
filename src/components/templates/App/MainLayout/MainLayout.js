import React from 'react';
import './style.css';
import Sidebar from '../../../organisms/App/Sidebar/Sidebar';


const MainLayout = ({children}) => {
  return (
    <div className="app-container">
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;