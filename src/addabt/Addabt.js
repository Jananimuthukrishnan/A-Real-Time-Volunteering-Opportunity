import React from 'react';
import './Addabt.css';

const Addabt = () => {
  const campaigns = [
    { percentage: 30, title: 'Help These Kids', className: 'campaign-image1' },
    { percentage: 69, title: 'Run For Education', className: 'campaign-image2' },
    { percentage: 78, title: 'New Vision - Parmethre', className: 'campaign-image3' },
  ];

  return (
    <div className="aboutt-page">
      {/* Trending Campaigns Section */}
      <div className="trending-campaigns">
        <h1>Most Trending Campaign</h1>
        <br />
        <div className="campaigns">
          {campaigns.map((campaign, index) => (
            <div key={index} className="campaign-card">
              <div className={`campaign-image ${campaign.className}`}></div>
              <div className="campaign-info">
                <h3>{campaign.percentage}% Raised</h3>
                <p>{campaign.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Addabt;
