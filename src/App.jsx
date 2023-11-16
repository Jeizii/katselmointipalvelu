// App.jsx
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import Page1 from './Page1'; import Page2 from './Page2'; import Page3 from './Page3'; import Page4 from './Page4';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);

  const handleLogin = (status) => {
    setLoggedIn(status);
    setCurrentPage(status ? <MainPage navigateToPage={navigateToPage} /> : null);
  };

  const navigateToPage = (page) => {
    switch (page) {
      case 'page1':
        setCurrentPage(<Page1 navigateToPage={navigateToPage} />);
        break;

        case 'page2':
        setCurrentPage(<Page2 navigateToPage={navigateToPage} />);
        break;

        case 'page3':
        setCurrentPage(<Page3 navigateToPage={navigateToPage} />);
        break;

        case 'page4':
        setCurrentPage(<Page4 navigateToPage={navigateToPage} />);
        break;


      // Add cases for other pages as needed
      default:
        setCurrentPage(<MainPage navigateToPage={navigateToPage} />);
        break;
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        currentPage || <MainPage navigateToPage={navigateToPage} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
