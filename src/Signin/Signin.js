import React, { useState } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Signin = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobileNumber: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        mobileNumber: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validation
        if (!formData.username) newErrors.username = 'Please fill in the username';
        if (!formData.email) newErrors.email = 'Please fill in the email';
        if (!formData.mobileNumber) newErrors.mobileNumber = 'Please fill in the mobile number';
        if (!formData.password) newErrors.password = 'Please fill in the password';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Submit form
        alert('Successfully Registered');
        // Clear form data
        setFormData({
            username: '',
            email: '',
            mobileNumber: '',
            password: '',
        });
        setErrors({});
    };

    return (
        <div className='signinpage'>
            <div className='form-container'>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="username"
                        name="username"
                        label="Username"
                        variant="standard"
                        value={formData.username}
                        onChange={handleChange}
                        error={!!errors.username}
                        helperText={errors.username}
                    />
                    <br /><br />
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        variant="standard"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <br /><br />
                    <TextField
                        id="mobileNumber"
                        name="mobileNumber"
                        label="Mobile Number"
                        variant="standard"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        error={!!errors.mobileNumber}
                        helperText={errors.mobileNumber}
                    />
                    <br /><br />
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        variant="standard"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    <br /><br />
                    <input type='checkbox' id='terms' />
                    <label htmlFor='terms'>Accept terms and conditions</label>
                    <br /><br />
                    <Button variant="contained" type="submit">Sign In</Button>
                    <br /><br />
                </form>
            </div>
        </div>
    );
};

export default Signin;
