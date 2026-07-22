import React from 'react';
import './App.css';
import EventExamples from './Components/EventExamples';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>Event Examples App</h1>
      <EventExamples />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
