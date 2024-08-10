import React, { useState } from 'react';
import './Rewards.css'; // Import the CSS file
import Sidebar from './Sidebar';

// Example rewards data
const initialRewards = [
  {
    id: 1,
    name: 'John Doe',
    rank: 'Gold',
    eventName: 'Annual Fundraiser',
  },
  {
    id: 2,
    name: 'Jane Smith',
    rank: 'Silver',
    eventName: 'Community Clean-Up',
  },
  {
    id: 3,
    name: 'Emily Davis',
    rank: 'Bronze',
    eventName: 'Volunteer Training',
  },
  {
    id: 4,
    name: 'Michael Brown',
    rank: 'Gold',
    eventName: 'Charity Run',
  },
];

const Rewards = () => {
  const [rewards, setRewards] = useState(initialRewards);
  const [editingReward, setEditingReward] = useState(null);
  const [newReward, setNewReward] = useState({ id: '', name: '', rank: '', eventName: '' });

  const handleEdit = (reward) => {
    setEditingReward(reward);
  };

  const handleDelete = (id) => {
    setRewards(rewards.filter(reward => reward.id !== id));
  };

  const handleSave = () => {
    // Handle save logic here
    setEditingReward(null);
  };

  const handleAdd = () => {
    setRewards([...rewards, { ...newReward, id: Date.now() }]);
    setNewReward({ id: '', name: '', rank: '', eventName: '' });
  };

  return (
    <div className="re-dashboard-container">
      <div className="re-sidebar">
       <Sidebar/>
      </div>
      <div className="re-main-content">
        <h1>Rewards</h1>
        <button className="re-add-button" onClick={() => setEditingReward({ id: '', name: '', rank: '', eventName: '' })}>+</button>
        {editingReward && (
          <div className="re-edit-modal">
            <h2>{editingReward.id ? 'Edit Reward' : 'Add New Reward'}</h2>
            <form>
              <label>ID:</label>
              <input type="text" value={editingReward.id || ''} onChange={(e) => setEditingReward({ ...editingReward, id: e.target.value })} />
              <label>Name:</label>
              <input type="text" value={editingReward.name || ''} onChange={(e) => setEditingReward({ ...editingReward, name: e.target.value })} />
              <label>Rank:</label>
              <input type="text" value={editingReward.rank || ''} onChange={(e) => setEditingReward({ ...editingReward, rank: e.target.value })} />
              <label>Event Name:</label>
              <input type="text" value={editingReward.eventName || ''} onChange={(e) => setEditingReward({ ...editingReward, eventName: e.target.value })} />
              <button type="button" onClick={editingReward.id ? handleSave : handleAdd}>
                {editingReward.id ? 'Save' : 'Add'}
              </button>
              <button type="button" onClick={() => setEditingReward(null)}>Cancel</button>
            </form>
          </div>
        )}
        <table className="re-reward-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Rank</th>
              <th>Event Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rewards.map(reward => (
              <tr key={reward.id}>
                <td>{reward.id}</td>
                <td>{reward.name}</td>
                <td>{reward.rank}</td>
                <td>{reward.eventName}</td>
                <td>
                  <button onClick={() => handleEdit(reward)}>Edit</button>
                  <button onClick={() => handleDelete(reward.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rewards;
