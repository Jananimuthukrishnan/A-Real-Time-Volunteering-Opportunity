import React from 'react';
import './Currentevent.css';

const eventData = [
  {
    title: 'Donation Sorting at Secret Seconds',
    date: '7 Jun',
    organization: 'YMCA',
    location: 'Missoula, MT',
    time: '6:00 AM - 9:00 AM MDT',
    category: 'Diversity, Equity, and Inclusion'
  },
  {
    title: 'Voter Registration Drive',
    date: '7 Jun',
    organization: 'League of Women Voters of Montana',
    location: 'Missoula, MT',
    time: '7:00 PM - 10:00 PM MDT',
    category: 'Diversity, Equity, and Inclusion'
  },
  {
    title: 'Clark Fork River Clean Up',
    date: '10 Jun',
    organization: 'Montana DebrisBusters Thype',
    location: 'Missoula, MT',
    time: '9:00 AM - 12:00 PM MST',
    category: 'Environmental'
  },
  {
    title: 'Trail Maintenance Day',
    date: '17 Jun',
    organization: 'Missoula Trails Inc.',
    location: 'Missoula, MT',
    time: '8:00 AM - 2:00 PM MDT',
    category: 'Mental Wellness'
  },
  {
    title: 'After School Tutoring',
    date: '20 Jun',
    organization: 'Missoula Tutoring Services',
    location: 'Missoula, MT',
    time: '4:00 PM - 6:00 PM MDT',
    category: 'Education'
  },
  {
    title: 'Set Up Marathon Aid Stations',
    date: '24 Jun',
    organization: 'Run Missoula',
    location: 'Missoula, MT',
    time: '6:00 AM - 10:00 AM MDT',
    category: 'Mental Wellness'
  }
];

const CurrentEventCard = ({ event, index }) => {
  return (
    <div className="currentevent-card">
      <div className={`currentevent-card-header event${index + 1}`}></div>
      <div className="currentevent-card-content">
        <h3>{event.title}</h3>
        <p>{event.date}</p>
        <p>{event.organization}</p>
        <p>{event.location}</p>
        <p>{event.time}</p>
        <p>{event.category}</p>
      </div>
    </div>
  );
};

const Currentevent = () => {
  return (
    <div className="currentevent-event-list">
      {eventData.map((event, index) => (
        <CurrentEventCard key={index} event={event} index={index} />
      ))}
    </div>
  );
};

export default Currentevent;
