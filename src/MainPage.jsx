// MainPage.jsx
import React from 'react';

const MainPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Main Page</h2>
      <div>
        <button onClick={() => console.log('Button 1 clicked')}>Button 1</button>
        <button onClick={() => console.log('Button 2 clicked')}>Button 2</button>
        <button onClick={() => console.log('Button 3 clicked')}>Button 3</button>
        <button onClick={() => console.log('Button 4 clicked')}>Button 4</button>
      </div>
    </div>
  );
};

export default MainPage;
