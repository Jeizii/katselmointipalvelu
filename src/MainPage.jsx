// MainPage.jsx
import React from 'react';
import './MainPage';
import './Page1.jsx';
import './Page2.jsx';
import './Page3.jsx';
import './Page4.jsx';

const MainPage = ({ navigateToPage }) => {
  const handleButtonClick = (page) => {
    navigateToPage(page);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Main Page</h2>
      <div className="button-container">
        <button onClick={() => handleButtonClick('Page1')} >Jatkuvakatselmointi</button>
        <button onClick={() => handleButtonClick('Page2')}>Lukukausi- ja vuosikatselmointi</button>
        <button onClick={() => handleButtonClick('Page3')}>Turvallisuuskatselmointi</button>
        <button onClick={() => handleButtonClick('Page4')}>Toimintamalli- ja johtamisenkatselmointi</button>
      </div>
    </div>
  );
};

export default MainPage;
