import React, { useEffect } from 'react';
import brain from './assets/brain-colorful.svg';
import flask from '/chemical-science.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [randomFact, setrandomFact] = useState('');
  useEffect(() => {
    showNyeFact();
  }, []);
  function showNyeFact() {
    fetch('http://localhost:3000/fact')
      .then((data) => {
        return data.json();
      })
      .then(({ randomFact }) => {
        setrandomFact(randomFact);
        console.log(randomFact);
      });
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
        <button onClick={showNyeFact}>Get A Random Fact</button>
      </div>
      <div className="fact-container">
        <p>{randomFact}</p>
      </div>
    </>
  );
}

export default App;
