import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartLine, FaUsers, FaCalendarAlt, FaComments, FaGift } from 'react-icons/fa'; 
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        {/* You can insert your logo image here */}
      </div>
      <div className="menu">
        <div className="menu-item">
          <FaHome className="menu-icon" />
          <Link to="/" className='sidebar-ad'>Home</Link>
        </div>
        <div className="menu-item">
          <FaChartLine className="menu-icon" />
          <Link to="/dashboard" className='sidebar-ad'>Dashboard</Link>
        </div>
        <div className="menu-item">
          <FaUsers className="menu-icon" />
          <Link to="/vmdashboard" className='sidebar-ad'>Volunteer Management</Link>
        </div>
        <div className="menu-item">
          <FaCalendarAlt className="menu-icon" />
          <Link to="/emdashboard" className='sidebar-ad'>Event Management</Link>
        </div>
        <div className="menu-item">
          <FaComments className="menu-icon" />
          <Link to="/feedback" className='sidebar-ad'>Feedback</Link>
        </div>
        <div className="menu-item">
          <FaGift className="menu-icon" />
          <Link to="/rewards" className='sidebar-ad'>Rewards</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
