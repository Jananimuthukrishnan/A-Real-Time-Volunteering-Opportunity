import React, { useState } from 'react';
import './Eventdashboard.css'; // Import the CSS file
import Sidebar from './Sidebar';

// Example event data
const initialEvents = [
  {
    id: 1,
    name: 'Community Clean-Up',
    date: '2024-08-15',
    location: 'Central Park',
    timing: '10:00 AM - 2:00 PM',
    description: 'Join us for a community clean-up event in Central Park.',
  },
  {
    id: 2,
    name: 'Fundraising Gala',
    date: '2024-09-10',
    location: 'Grand Hotel',
    timing: '7:00 PM - 11:00 PM',
    description: 'An evening gala to raise funds for local charities.',
  },
  {
    id: 3,
    name: 'Charity Run',
    date: '2024-10-01',
    location: 'City Stadium',
    timing: '8:00 AM - 12:00 PM',
    description: 'Participate in a charity run to support health initiatives.',
  },
  {
    id: 4,
    name: 'Volunteer Training',
    date: '2024-11-05',
    location: 'Community Center',
    timing: '9:00 AM - 3:00 PM',
    description: 'Training session for new volunteers.',
  },
];

const Eventdashboard = () => {
  const [events, setEvents] = useState(initialEvents);
  const [editingEvent, setEditingEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({});

  const handleEdit = (event) => {
    setEditingEvent(event);
  };

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleSave = () => {
    // Handle save logic here
    setEditingEvent(null);
  };

  const handleAdd = () => {
    setEvents([...events, { ...newEvent, id: Date.now() }]);
    setNewEvent({});
  };

  return (
    <div className="em-dashboard-container">
      <div className="em-sidebar">
        <Sidebar/>
      </div>
      <div className="em-main-content">
        <h1>Event Management</h1>
        <button className="em-add-button" onClick={() => setEditingEvent({})}>+</button>
        {editingEvent && (
          <div className="em-edit-modal">
            <h2>{editingEvent.id ? 'Edit Event' : 'Add New Event'}</h2>
            <form>
              <label>Event Name:</label>
              <input type="text" value={editingEvent.name || ''} onChange={(e) => setEditingEvent({...editingEvent, name: e.target.value})} />
              <label>Date:</label>
              <input type="date" value={editingEvent.date || ''} onChange={(e) => setEditingEvent({...editingEvent, date: e.target.value})} />
              <label>Location:</label>
              <input type="text" value={editingEvent.location || ''} onChange={(e) => setEditingEvent({...editingEvent, location: e.target.value})} />
              <label>Timing:</label>
              <input type="text" value={editingEvent.timing || ''} onChange={(e) => setEditingEvent({...editingEvent, timing: e.target.value})} />
              <label>Description:</label>
              <textarea value={editingEvent.description || ''} onChange={(e) => setEditingEvent({...editingEvent, description: e.target.value})} />
              <button type="button" onClick={editingEvent.id ? handleSave : handleAdd}>
                {editingEvent.id ? 'Save' : 'Add'}
              </button>
              <button type="button" onClick={() => setEditingEvent(null)}>Cancel</button>
            </form>
          </div>
        )}
        <table className="em-event-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Timing</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>{event.timing}</td>
                <td>{event.description}</td>
                <td>
                  <button onClick={() => handleEdit(event)}>Edit</button>
                  <button onClick={() => handleDelete(event.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Eventdashboard;
