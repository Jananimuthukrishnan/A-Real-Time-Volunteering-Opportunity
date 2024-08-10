// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="logo">
        
      </div>
      <div className="menu">
        <div className="menu-item"><Link to="/dashboard">Admin Dashboard</Link></div>
        <div className="menu-item"><Link to="/vmdashboard">Volunteer Management</Link></div>
        <div className="menu-item"><Link to="/emdashboard">Event Management</Link></div>
        <div className="menu-item"><Link to="/feedback">Feedback</Link></div>
        <div className="menu-item"><Link to="/rewards">Rewards</Link></div>
      </div>
   <div className="timer">
      <h3>00:56</h3>
    </div>
    </div>
  );
};

export default Sidebar;
