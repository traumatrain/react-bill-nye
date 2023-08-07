import { useState, useEffect } from 'react';

export default function useNyeFact() {
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

  return [randomFact, showNyeFact];
}
