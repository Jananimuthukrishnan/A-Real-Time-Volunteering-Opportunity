import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

const SigninModal = ({ isOpen, onRequestClose, openLoginModal, openAdminLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repassword: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (formData[key] === '') {
        newErrors[key] = 'Please fill it';
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      try {
        const response = await axios.post('http://localhost:9000/reg', formData);
        console.log('User registered:', response.data);
        alert('Registration successful');
        onRequestClose();
        navigate('/landing');
      } catch (error) {
        console.error('There was an error registering the user!', error);
        alert('Registration failed');
      }
    }
  };

  const handleOpenLoginModal = () => {
    onRequestClose();
    openLoginModal();
  };

  const handleOpenAdminLogin = () => {
    onRequestClose();
    openAdminLogin();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} contentLabel="Sign In Modal">
      <div className="modal-image-container signin-image"></div>
      <div className="modal-content">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Enter username" name="username" value={formData.username} onChange={handleChange} />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm password" name="repassword" value={formData.repassword} onChange={handleChange} />
            {errors.repassword && <span className="error-message">{errors.repassword}</span>}
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
        <p>
          Already have an account? <span className="login-link" onClick={handleOpenLoginModal}>Login</span> or <span className="Admin-link" onClick={handleOpenAdminLogin}>Admin</span>
        </p>
      </div>
    </Modal>
  );
};

export default SigninModal;
