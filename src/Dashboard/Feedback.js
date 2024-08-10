import React, { useState } from 'react';
import './Feedback.css'; // Import the CSS file
import Sidebar from './Sidebar';

// Example feedback data
const initialFeedbacks = [
  {
    id: 1,
    name: 'Alice Johnson',
    feedback: 'Great service and friendly staff!',
    rating: 4, // Out of 5 stars
  },
  {
    id: 2,
    name: 'Bob Smith',
    feedback: 'The event was well-organized and enjoyable.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Charlie Brown',
    feedback: 'Could use some improvements in communication.',
    rating: 3,
  },
  {
    id: 4,
    name: 'Diana Prince',
    feedback: 'Wonderful experience, would definitely recommend.',
    rating: 5,
  },
];

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);
  const [editingFeedback, setEditingFeedback] = useState(null);
  const [newFeedback, setNewFeedback] = useState({ name: '', feedback: '', rating: 0 });

  const handleEdit = (feedback) => {
    setEditingFeedback(feedback);
  };

  const handleDelete = (id) => {
    setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
  };

  const handleSave = () => {
    // Handle save logic here
    setEditingFeedback(null);
  };

  const handleAdd = () => {
    setFeedbacks([...feedbacks, { ...newFeedback, id: Date.now() }]);
    setNewFeedback({ name: '', feedback: '', rating: 0 });
  };

  return (
    <div className="fm-dashboard-container">
      <div className="fm-sidebar">
       <Sidebar/>
      </div>
      <div className="fm-main-content">
        <h1>Feedback</h1>
        <button className="fm-add-button" onClick={() => setEditingFeedback({ name: '', feedback: '', rating: 0 })}>+</button>
        {editingFeedback && (
          <div className="fm-edit-modal">
            <h2>{editingFeedback.id ? 'Edit Feedback' : 'Add New Feedback'}</h2>
            <form>
              <label>Name:</label>
              <input type="text" value={editingFeedback.name || ''} onChange={(e) => setEditingFeedback({ ...editingFeedback, name: e.target.value })} />
              <label>Feedback:</label>
              <textarea value={editingFeedback.feedback || ''} onChange={(e) => setEditingFeedback({ ...editingFeedback, feedback: e.target.value })} />
              <label>Rating:</label>
              <div className="fm-star-rating">
                {[1, 2, 3, 4, 5].map(star => (
                  <span
                    key={star}
                    className={`fm-star ${star <= (editingFeedback.rating || 0) ? 'filled' : ''}`}
                    onClick={() => setEditingFeedback({ ...editingFeedback, rating: star })}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button type="button" onClick={editingFeedback.id ? handleSave : handleAdd}>
                {editingFeedback.id ? 'Save' : 'Add'}
              </button>
              <button type="button" onClick={() => setEditingFeedback(null)}>Cancel</button>
            </form>
          </div>
        )}
        <table className="fm-feedback-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Feedback</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map(feedback => (
              <tr key={feedback.id}>
                <td>{feedback.name}</td>
                <td>{feedback.feedback}</td>
                <td>
                  <div className="fm-star-rating">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span key={star} className={`fm-star ${star <= feedback.rating ? 'filled' : ''}`}>★</span>
                    ))}
                  </div>
                </td>
                <td>
                  <button onClick={() => handleEdit(feedback)}>Edit</button>
                  <button onClick={() => handleDelete(feedback.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feedback;
