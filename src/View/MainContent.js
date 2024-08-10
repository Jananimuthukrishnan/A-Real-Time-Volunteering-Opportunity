import React from 'react';
import './Style.css';
 // adjust the path according to your project structure

const MainContent = () => {
  return (
    <main className="new-main">
      <div className="new-main-content">
        <div className="new-text-content">
          <h1 className="new-title">Volunteering</h1>
          <p className="new-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="new-button">More</button>
        </div>
        <div className="new-image-content">
          <img src={"C:\Users\HP\Desktop\V_o\voapp\public\onimg.jpg"} alt="Donating and Volunteering" className="new-illustration" />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
