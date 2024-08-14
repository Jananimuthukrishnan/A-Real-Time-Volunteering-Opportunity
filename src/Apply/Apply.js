import React, { useState } from 'react';
import axios from 'axios';
import './Apply.css';
import { useNavigate } from 'react-router-dom';



const Apply = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        availability: '',
        interest: '',
        skills: '',
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

        // Validation: check if all fields are filled
        Object.keys(formData).forEach((key) => {
            if (formData[key] === '') {
                newErrors[key] = 'Please fill it';
                isValid = false;
            }
        });

        setErrors(newErrors);

        if (isValid) {
            try {
                const response = await axios.post('http://localhost:9000/Apply', formData);
                console.log('User Applied:', response.data);
                alert('Application successful');
            } catch (error) {
                console.error('There was an error registering the user!', error);
                alert('Application failed');
            }
            navigate('/landing'); 
        }
    };

    return (
        <div className="application-form-container">
            <form className="application-form" onSubmit={handleSubmit}>
                <h2>Volunteering Application</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="availability">Availability</label>
                    <input
                        type="text"
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        required
                    />
                    {errors.availability && <span className="error">{errors.availability}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="interest">Interest</label>
                    <input
                        type="text"
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                    />
                    {errors.interest && <span className="error">{errors.interest}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="skills">Skills</label>
                    <input
                        type="text"
                        id="skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        required
                    />
                    {errors.skills && <span className="error">{errors.skills}</span>}
                </div>

                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
};

export default Apply;
