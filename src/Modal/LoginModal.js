import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios'; // Import axios
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

const LoginModal = ({ isOpen, onRequestClose, handleLogin, openSigninModal, openAdminLogin }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (username === '') {
      setUsernameError('Please fill in the username');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (password === '') {
      setPasswordError('Please fill in the password');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      try {
        const response = await axios.post('http://localhost:9001/login', { username, password });
        console.log('Login successful:', response.data);
        alert('Login successful');
        handleLogin(username);
        navigate(username === 'admin' ? '/dashboard' : '/landing');
      } catch (error) {
        console.error('There was an error logging in:', error);
        alert('Login failed');
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} contentLabel="Login Modal">
      <div className="modal-image-container login-image"></div>
      <div className="modal-content">
        <h2>Login</h2>
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
          Need an account? <span className="signin-link" onClick={openSigninModal}>Sign up</span> or <span className="Admin-link" onClick={openAdminLogin}>Admin</span>
        </p>
      </div>
    </Modal>
  );
};

export default LoginModal;
