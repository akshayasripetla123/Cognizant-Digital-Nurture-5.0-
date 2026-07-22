import React, { useState } from 'react';
import './App.css';
import GuestPage from './Components/GuestPage';
import UserPage from './Components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // ELEMENT VARIABLE: "button" holds the JSX for either the Login
  // or Logout button, decided using conditional rendering (if-else)
  let button;
  if (isLoggedIn) {
    button = <button onClick={handleLogout}>Logout</button>;
  } else {
    button = <button onClick={handleLogin}>Login</button>;
  }

  // ELEMENT VARIABLE: "page" holds the JSX for either the Guest page
  // or the User page, decided using conditional rendering (if-else)
  let page;
  if (isLoggedIn) {
    page = <UserPage />;
  } else {
    page = <GuestPage />;
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>Flight Ticket Booking</h1>
        {button}
      </header>

      {page}
    </div>
  );
}

export default App;
