// App.jsx
import React, { useState } from 'react';
import Login from './LoginPage';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setLoggedIn(status);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome to the Main Page!</h2>
          {/* Your main page content goes here */}
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
