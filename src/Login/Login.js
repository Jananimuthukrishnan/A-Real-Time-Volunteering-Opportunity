import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!username) {
      setUsernameError('Please enter your username');
      hasError = true;
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Please enter your password');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (!hasError) {
      // Proceed with login or redirect logic here
      window.location.href = '/landing';
    }
  };

  return (
    <div className='login-page'>
      <div className='form-container'>
        <form
          className='login-form'
          onSubmit={handleLogin}
        >
          <h1>Login</h1>
          <p>Hi, Welcome Back</p>

          <TextField
            id="username"
            label="Username"
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!usernameError}
            helperText={usernameError}
            fullWidth
          />
          <br /><br />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
            fullWidth
          />
          <br /><br />
          <div className='forgot-password'>
            <p>Forget password?</p>
          </div>
          <br />

          <Button className="submit-button" variant="contained" type="submit">
            Submit
          </Button>
          <br />

          <p>Not Registered? <Link to="/signin"><span>Sign In</span></Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
