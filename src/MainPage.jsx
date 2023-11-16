// MainPage.jsx
import React from 'react';
import './MainPage.css';

const MainPage = ({ navigateToPage }) => {
  const handleButtonClick = (page) => {
    navigateToPage(page);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Main Page</h2>
      <div className="button-container">
        <button onClick={() => handleButtonClick('page1')} >Jatkuvakatselmointi</button>
        <button onClick={() => handleButtonClick('page2')}>Lukukausi- ja vuosikatselmointi</button>
        <button onClick={() => handleButtonClick('page3')}>Turvallisuuskatselmointi</button>
        <button onClick={() => handleButtonClick('page4')}>Toimintamalli- ja johtamisenkatselmointi</button>
      </div>
    </div>
  );
};

export default MainPage;
