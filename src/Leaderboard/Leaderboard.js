// Leaderboard.js
import React from 'react';
import './Leaderboard.css';

const data = [
  { rank: 1, name: 'Janani', username: '@Janani', points: 256, imageClass: 'annvit' },
  { rank: 2, name: 'Delvina...', username: '@delvina12', points: 245, imageClass: 'penny12' },
  { rank: 3, name: 'Lokesha', username: '@lokesha_12', points: 236, imageClass: 'john_1994' },
  { rank: 4, name: 'Thamana', username: '@but_128', points: 230, imageClass: 'but_128' },
  { rank: 5, name: 'Anupama', username: '@bd', points: 183, imageClass: 'bd' },
  { rank: 6, name: 'Samantha', username: '@hoPk', points: 177, imageClass: 'hoPk' },
];

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <h2>LEADERBOARD</h2>
      <div className="leaderboard-tabs">
        
      </div>
      <div className="leaderboard-list">
        {data.map((user) => (
          <div className={`leaderboard-item ${user.rank <= 3 ? 'top-three' : ''}`} key={user.rank}>
            <div className="rank">{user.rank}</div>
            <div className={`user-image ${user.imageClass}`} />
            <div className="user-info">
              <div className="name">{user.name}</div>
              <div className="username">{user.username}</div>
            </div>
            <div className="points">{user.points}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
