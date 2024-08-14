import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaCalendarAlt, FaCheckCircle, FaHourglass, FaRegCalendar, FaDollarSign } from 'react-icons/fa';
import {
    ResponsiveContainer,
    LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip} from 'recharts';
  
  
import './VolunteerProfile.css';

const VolunteerProfile = () => {
  const data = [
    { name: '08/01', involvement: 120 },
    { name: '08/02', involvement: 90 },
    { name: '08/03', involvement: 70 },
    { name: '08/04', involvement: 100 },
    { name: '08/05', involvement: 140 },
    { name: '08/06', involvement: 110 },
    { name: '08/07', involvement: 80 },
  ];

  return (
    <div className="volunteer-profile">
      <div className="profile-header">
        <div className="profile-image"></div>
        <div className="profile-info">
          <h2>Madison Mikhail</h2>
          <p>@madison</p>
          <span className="badge">INTERNAL</span>
        </div>
      </div>
      
      <div className="profile-tabs">
        <div className="tab">Details</div>
        <div className="tab">Event Activity</div>
        <div className="tab">Donation Activity</div>
        <div className="tab">Registry Activity</div>
        <div className="tab">Notes</div>
      </div>

      <div className="profile-content">
        <div className="attendance">
          <FaCheckCircle className="icon" />
          <div>
            <h3>63%</h3>
            <p>Good Attendance</p>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <FaHourglass className="icon" />
            <div>
              <h3>32h 15m</h3>
              <p>Hours</p>
            </div>
          </div>
          <div className="stat">
            <FaRegCalendar className="icon" />
            <div>
              <h3>59</h3>
              <p>Events</p>
            </div>
          </div>
          <div className="stat">
            <FaDollarSign className="icon" />
            <div>
              <h3>$523</h3>
              <p>Donations</p>
            </div>
          </div>
        </div>

        <div className="bio">
          <h3>Bio</h3>
          <p>I care a lot about a lot. Find me in between NYC and Columbus, Ohio with my tortoises and baby girl.</p>
        </div>

        <div className="contact-info">
          <h3>Contact Info</h3>
          <ul>
            <li><FaEnvelope className="icon" /> madison@pinapp.org</li>
            <li><FaPhone className="icon" /> +1 (242) 545-4322</li>
            <li><FaUser className="icon" /> Female</li>
            <li><FaMapMarkerAlt className="icon" /> Columbus, OH, USA</li>
            <li><FaCalendarAlt className="icon" /> Invited Sep 16th, 2020</li>
          </ul>
        </div>

        <div className="involvement">
          <h3>Involvement</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="involvement" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfile;
