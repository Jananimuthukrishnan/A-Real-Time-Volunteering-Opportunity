import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './Modal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1001,
  },
  overlay: {
    zIndex: 1000,
  }
};

Modal.setAppElement('#root');

const AdminLogin = ({ isOpen, onRequestClose, openSigninModal, openLoginModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (username === '') {
      setUsernameError('Please fill it');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (password === '') {
      setPasswordError('Please fill it');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      onRequestClose();
      navigate('/dashboard');
    }
  };

  const handleOpenSigninModal = () => {
    onRequestClose();
    openSigninModal();
  };

  const handleOpenLoginModal = () => {
    onRequestClose();
    openLoginModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Admin Login Modal"
    >
      <div className="modal-image-container login-image"></div>
      <div className="modal-content">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && <span className="error-message">{usernameError}</span>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <span className="error-message">{passwordError}</span>}
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p>
          Need an account? <span className="signin-link" onClick={handleOpenSigninModal}>Sign up</span> or <span className="Admin-link" onClick={handleOpenLoginModal}>Login</span>
        </p>
      </div>
    </Modal>
  );
};

export default AdminLogin;
