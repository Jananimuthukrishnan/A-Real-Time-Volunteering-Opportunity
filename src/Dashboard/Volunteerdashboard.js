import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Volunteerdashboard.css'; // Import the CSS file
import Sidebar from './Sidebar';


const API_URL = 'http://localhost:9000/All';

const Volunteerdashboard = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [editingVolunteer, setEditingVolunteer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log('API Response:', response.data);
        
        if (Array.isArray(response.data)) {
          setVolunteers(response.data);
        } else {
          console.error('Unexpected data format:', response.data);
          setError('Unexpected data format');
          setVolunteers([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error.response || error.message);
        setError('Failed to fetch volunteers');
        setVolunteers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  const handleEdit = (volunteer) => {
    setEditingVolunteer(volunteer);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setVolunteers(volunteers.filter(volunteer => volunteer.id !== id));
    } catch (error) {
      setError('Failed to delete volunteer');
      console.error('Error deleting data:', error.response || error.message);
    }
  };

  const handleSave = async () => {
    try {
      if (editingVolunteer) {
        const response = await axios.put(`${API_URL}/${editingVolunteer.id}`, editingVolunteer);
        setVolunteers(volunteers.map(v => v.id === response.data.id ? response.data : v));
        setEditingVolunteer(null);
      }
    } catch (error) {
      console.error('Error saving volunteer:', error.response || error.message);
      setError('Failed to save volunteer');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="vm-dashboard-container">
      <div className="vm-sidebar">
        <Sidebar />
      </div>
      <div className="vm-main-content">
        <h1>Volunteer Management</h1>
        {editingVolunteer && (
          <div className="vm-edit-modal">
            <h2>Edit Volunteer</h2>
            <form>
              <label>Name:</label>
              <input
                type="text"
                value={editingVolunteer.name}
                onChange={(e) => setEditingVolunteer({ ...editingVolunteer, name: e.target.value })}
              />
              <label>Email:</label>
              <input
                type="email"
                value={editingVolunteer.email}
                onChange={(e) => setEditingVolunteer({ ...editingVolunteer, email: e.target.value })}
              />
              <label>Phone:</label>
              <input
                type="text"
                value={editingVolunteer.phone}
                onChange={(e) => setEditingVolunteer({ ...editingVolunteer, phone: e.target.value })}
              />
              <label>Availability:</label>
              <input
                type="text"
                value={editingVolunteer.availability}
                onChange={(e) => setEditingVolunteer({ ...editingVolunteer, availability: e.target.value })}
              />
              <label>Interest:</label>
              <input
                type="text"
                value={editingVolunteer.interest}
                onChange={(e) => setEditingVolunteer({ ...editingVolunteer, interest: e.target.value })}
              />
              <label>Skills:</label>
              <input
                type="text"
                value={editingVolunteer.skills}
                onChange={(e) => setEditingVolunteer({ ...editingVolunteer, skills: e.target.value })}
              />
              <label>Hours:</label>
              <input
                type="number"
                value={editingVolunteer.hours}
                onChange={(e) => setEditingVolunteer({ ...editingVolunteer, hours: e.target.value })}
              />
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
                  <button onClick={() => handleEdit(volunteer)}>
                    <i className="fas fa-edit"></i>
                  </button>
                  <button onClick={() => handleDelete(volunteer.id)}>
                    <i className="fas fa-trash"></i>
                  </button>
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
