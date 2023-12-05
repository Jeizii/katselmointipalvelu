// App.jsx
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import MainPage from './MainPage';



const App = () => {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);

  const handleLogin = (status) => {
    setLoggedIn(status);
    setCurrentPage(status ? <MainPage navigateToPage={navigateToPage} /> : null);
  };

  

  return (
    <div>
      <h1></h1>
      {isLoggedIn ? (
        currentPage || <MainPage navigateToPage={navigateToPage} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
