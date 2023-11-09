// App.jsx
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setLoggedIn(status);
  };

  return (
    <div>
      {isLoggedIn ? (
        <MainPage />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
