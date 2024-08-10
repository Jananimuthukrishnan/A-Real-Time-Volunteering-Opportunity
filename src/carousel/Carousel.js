import React from 'react';
import './Carousel.css';

const feedbackData = [
  {
    imageClass: 'image1',
    text: 'Chaia has been with my family during May+June 2024 and all I can say is that she is a wonderful young lady. Some points that I appreciate are: - She ...',
    date: '29/07/2024',
    role: 'For Workawayer',
    rating: 4, // Adding a rating out of 5
  },
  {
    imageClass: 'image2',
    text: 'Giorgos was supposed to stay with us for 2 to 4 weeks and finally he stayed for 6 weeks. We were so happy that he decided to stay longer. We ...',
    date: '28/07/2024',
    role: 'For Workawayer',
    rating: 5,
  },
  {
    imageClass: 'image3',
    text: 'It was a great time with Camilo and his family. I enjoyed my 3-week stay a lot. You will get the chance to get around a lot, doing and enjoying ...',
    date: '28/07/2024',
    role: 'For Host',
    rating: 4,
  },
];

const Carousel = () => {
  return (
    <div className="feedback-container">
      <h2>Top 3 Feedbacks</h2>
      <br></br>
      <div className="feedback-cards">
        {feedbackData.map((feedback, index) => (
          <div key={index} className="feedback-card">
            <div className={`feedback-image ${feedback.imageClass}`} />
            <p className="feedback-text">"{feedback.text}"</p>
            <div className="feedback-rating">
              {[...Array(5)].map((star, i) => (
                <span key={i} className={`star ${i < feedback.rating ? 'filled' : ''}`}>★</span>
              ))}
            </div>
            <a href="#" className="read-more">read more...</a>
            <p className="feedback-date">{feedback.role}, {feedback.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
