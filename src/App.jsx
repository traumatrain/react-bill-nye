import React from 'react';
import brain from './assets/brain-colorful.svg';
import flask from '/chemical-science.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [fact, setFact] = useState('This is a fact');
  function getNyeFact() {
    setFact('Here is another Bill Nye Fact'),
      console.log('Here is a Bill Nye fact');
  }
  return (
    <>
      <div>
        <a>
          <img src={brain} className="logo brain" alt="Brain logo" />
        </a>
        <a>
          <img src={flask} className="logo flask" alt="Erlenmeyer flask logo" />
        </a>
      </div>
      <h1>Bill Nye Fact App</h1>
      <div className="action-button">
        <button onClick={getNyeFact}>Get A Random Fact</button>
      </div>
      <div className="fact-container">
        <p>{fact}</p>
      </div>
    </>
  );
}

export default App;
