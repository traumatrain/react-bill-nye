import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Header from './Header';
import Button from './Button';
import FactContainer from './Fact-Container';

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
        <Header />
      </div>
      <div>
        <Button showNyeFact={showNyeFact} />
      </div>
      <div>
        <FactContainer>{randomFact}</FactContainer>
      </div>
    </>
  );
}

export default App;
