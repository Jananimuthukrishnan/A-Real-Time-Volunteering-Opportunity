import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import LoginModal from '../Modal/LoginModal';
import SigninModal from '../Modal/SigninModal';
import AdminLogin from '../Modal/AdminLogin';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const navigate = useNavigate();

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSigninModal = () => {
    setIsSigninModalOpen(true);
    setIsLoginModalOpen(false);
    setIsAdminLoginOpen(false);
  };

  const closeSigninModal = () => {
    setIsSigninModalOpen(false);
  };

  const openAdminLogin = () => {
    setIsAdminLoginOpen(true);
    setIsLoginModalOpen(false);
    setIsSigninModalOpen(false);
  };

  const closeAdminLogin = () => {
    setIsAdminLoginOpen(false);
  };

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    setUser(null);
    setShowDropdown(false);
    navigate('/landing');
  };

  const handleLogin = (username) => {
    setUser(username);
    closeLoginModal();
  };

  return (
    <div className="headernav">
      <div className="container">
        <Link to="/" className="logo-link">
          <span className="logo" aria-label="KindQuest Logo"></span>
        </Link>
        <nav className="nav">
          <ul>
            <li><Link to="/landing"><h3>Home</h3></Link></li>
            <li><Link to="/organization"><h3>Organization</h3></Link></li>
            <li><Link to="/event"><h3>Events</h3></Link></li>
            <li><Link to="/donate"><h3>Donate</h3></Link></li>
            <li><Link to="/contact"><h3>Contact</h3></Link></li>

            {user ? (
  <li className="profile-icon" onClick={handleProfileClick}>
    <span className="profile-picture"></span>
    <span className="profile-name">{user}</span>
    {showDropdown && (
      <div className="profile-popup">
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/feedbackform">Feedback</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>
    )}
  </li>
) : (
  <li><Link to="#" onClick={openLoginModal}><h3>Login</h3></Link></li>
)}

          </ul>
        </nav>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        handleLogin={handleLogin}
        openSigninModal={openSigninModal}
        openAdminLogin={openAdminLogin}
      />
      <SigninModal
        isOpen={isSigninModalOpen}
        onRequestClose={closeSigninModal}
        openLoginModal={openLoginModal}
        openAdminLogin={openAdminLogin}
      />
      <AdminLogin
        isOpen={isAdminLoginOpen}
        onRequestClose={closeAdminLogin}
        openSigninModal={openSigninModal}
        openLoginModal={openLoginModal}
      />
    </div>
  );
};
export default Navbar;
