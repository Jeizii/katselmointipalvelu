// MainPage.jsx
import React from 'react';

const MainPage = ({ navigateToPage }) => {
  const handleButtonClick = (page) => {
    navigateToPage(page);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Main Page</h2>
      <div>
        <button onClick={() => handleButtonClick('page1')}>Button 1</button>
        <button onClick={() => handleButtonClick('page2')}>Button 2</button>
        <button onClick={() => handleButtonClick('page3')}>Button 3</button>
        <button onClick={() => handleButtonClick('page4')}>Button 4</button>
      </div>
    </div>
  );
};

export default MainPage;
