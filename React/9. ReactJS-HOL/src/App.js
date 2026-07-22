import React, { useState } from 'react';
import './App.css';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

function App() {
  // flag controls which component is displayed on the home page
  const [flag, setFlag] = useState(true);

  // Simple if-else based on the flag variable
  let content;
  if (flag) {
    content = <ListofPlayers />;
  } else {
    content = <IndianPlayers />;
  }

  return (
    <div className="App">
      <h1>Cricket App - ES6 Features</h1>
      <button onClick={() => setFlag(!flag)}>
        Toggle Flag (Current: {flag ? 'true' : 'false'})
      </button>
      {content}
    </div>
  );
}

export default App;
