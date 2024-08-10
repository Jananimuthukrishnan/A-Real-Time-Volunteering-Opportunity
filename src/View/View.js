import React from 'react';

import './Style.css';
import Header from './Header';
import MainContent from './MainContent';


function View() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
    </div>
  );
}

export default View;
