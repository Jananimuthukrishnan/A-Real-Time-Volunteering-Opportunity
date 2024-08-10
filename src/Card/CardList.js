import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = () => {
  const cardsData = [
    {
      title: 'Create from scratch',
      description: 'Create a volunteer opportunity with a blank form',
      imageClass: 'image-create-scratch',
    },
    {
      title: 'Improve our website',
      description: 'Support us in taking our web presence to the next level',
      imageClass: 'image-improve-website',
    },
    {
      title: 'Translate our content',
      description: 'Help us make reach more people in different locations',
      imageClass: 'image-translate-content',
    },
    {
      title: 'Create a social media strategy',
      description: 'Help us reach our audience on social media',
      imageClass: 'image-social-media',
    },
    {
      title: 'Join our mentoring program',
      description: 'Guide a mentee to support their professional development',
      imageClass: 'image-mentoring-program',
    },
    {
      title: 'Support our marketing',
      description: 'Help us attract more donors and drive growth',
      imageClass: 'image-support-marketing',
    },
  ];

  return (
    <div className="card-list">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageClass={card.imageClass}
        />
      ))}
    </div>
  );
};

export default CardList;
