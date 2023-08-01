import React from 'react';
import brain from './assets/brain-colorful.svg';
import flask from '/chemical-science.svg';
import './App.css';

function App() {
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
      {/** Create a level 1 heading here... */}
      <div className="action-button">
        {/** Create a button to fetch a new fact here... */}
      </div>
      <div className="fact-container">
        <p>{/** Display the fetched fact here... */}</p>
      </div>
    </>
  );
}

export default App;
