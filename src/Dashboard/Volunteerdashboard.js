import React, { useState } from 'react';
import './Volunteerdashboard.css'; // Import the CSS file
import Sidebar from './Sidebar';

// Example volunteer data
const initialVolunteers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    availability: 'Weekdays',
    interest: 'Community Service',
    skills: 'Leadership, Event Planning',
    hours: 20,
  },
  // Add more volunteers here if needed
];

const Volunteerdashboard = () => {
  const [volunteers, setVolunteers] = useState(initialVolunteers);
  const [editingVolunteer, setEditingVolunteer] = useState(null);

  const handleEdit = (volunteer) => {
    setEditingVolunteer(volunteer);
  };

  const handleDelete = (id) => {
    setVolunteers(volunteers.filter(volunteer => volunteer.id !== id));
  };

  const handleSave = () => {
    // Handle save logic here
    setEditingVolunteer(null);
  };

  return (
    <div className="vm-dashboard-container">
      <div className="vm-sidebar">
      <Sidebar/>
      </div>
      <div className="vm-main-content">
        <h1>Volunteer Management</h1>
        {editingVolunteer && (
          <div className="vm-edit-modal">
            <h2>Edit Volunteer</h2>
            <form>
              <label>Name:</label>
              <input type="text" value={editingVolunteer.name} onChange={(e) => setEditingVolunteer({...editingVolunteer, name: e.target.value})} />
              <label>Email:</label>
              <input type="email" value={editingVolunteer.email} onChange={(e) => setEditingVolunteer({...editingVolunteer, email: e.target.value})} />
              <label>Phone:</label>
              <input type="text" value={editingVolunteer.phone} onChange={(e) => setEditingVolunteer({...editingVolunteer, phone: e.target.value})} />
              <label>Availability:</label>
              <input type="text" value={editingVolunteer.availability} onChange={(e) => setEditingVolunteer({...editingVolunteer, availability: e.target.value})} />
              <label>Interest:</label>
              <input type="text" value={editingVolunteer.interest} onChange={(e) => setEditingVolunteer({...editingVolunteer, interest: e.target.value})} />
              <label>Skills:</label>
              <input type="text" value={editingVolunteer.skills} onChange={(e) => setEditingVolunteer({...editingVolunteer, skills: e.target.value})} />
              <label>Hours:</label>
              <input type="number" value={editingVolunteer.hours} onChange={(e) => setEditingVolunteer({...editingVolunteer, hours: e.target.value})} />
              <button type="button" onClick={handleSave}>Save</button>
              <button type="button" onClick={() => setEditingVolunteer(null)}>Cancel</button>
            </form>
          </div>
        )}
        <table className="vm-volunteer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Availability</th>
              <th>Interest</th>
              <th>Skills</th>
              <th>Hours</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map(volunteer => (
              <tr key={volunteer.id}>
                <td>{volunteer.name}</td>
                <td>{volunteer.email}</td>
                <td>{volunteer.phone}</td>
                <td>{volunteer.availability}</td>
                <td>{volunteer.interest}</td>
                <td>{volunteer.skills}</td>
                <td>{volunteer.hours}</td>
                <td>
                  <button onClick={() => handleEdit(volunteer)}>Edit</button>
                  <button onClick={() => handleDelete(volunteer.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Volunteerdashboard;
