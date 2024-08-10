import React from 'react';
import './Event.css';
import Calendar from '../Calender/Calender';
import CardList from '../Card/CardList';
import Currentevent from '../CurrentEve/Currentevent';

const EventCard = ({ title, description, icon }) => {
  return (
    <div className="event-card">
      <div className="event-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const Event = () => {
  const eventData = [
    {
      title: 'Social volunteering',
      description: 'Social volunteering focuses on helping communities through activities like mentoring, community clean-ups, and supporting marginalized groups.',
      icon: '👥',
    },
    {
      title: 'Virtual volunteering',
      description: 'Virtual volunteering allows individuals to contribute their skills remotely, supporting causes like online mentoring, digital content creation, and virtual event organization.',
      icon: '💻',
    },
    {
      title: 'Environmental volunteering',
      description: 'Environmental volunteering involves activities like tree planting, conservation projects, and waste reduction initiatives.',
      icon: '🌍',
    },
    {
      title: 'Medical volunteering',
      description: 'Medical volunteering includes assisting in healthcare settings, providing first aid training, and supporting public health campaigns, improving access to medical services.',
      icon: '⚕️',
    },
    {
      title: 'Corporate volunteering',
      description: 'Corporate volunteering encourages employees to engage in community service, offering skills-based support, organizing charity events, and fostering a culture of social responsibility.',
      icon: '🏢',
    },
    {
      title: 'Sport events volunteering',
      description: 'Sports events volunteering involves assisting in the organization and management of sports activities, promoting physical fitness, and encouraging community participation.',
      icon: '🏆',
    },
  ];

  return (
    <div className="events-page">
      <div className="events-grid">
        {eventData.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
     <br></br><br></br><br></br>
      <CardList/>
      <br></br><br></br>
      <h1>Calender</h1>
      <Calendar/>
      <br></br><br></br>
      <h1>Past Events</h1>
      <br></br>
      <Currentevent/>
    </div>

  );
};

export default Event;
