import React from 'react';

export default function FactContainer({ randomFact }) {
  return (
    <div className="fact-container">
      <p>{randomFact}</p>
    </div>
  );
}

// another way to do this
// FactContainer({ children })
// <p>{children}</p>
// on App.jsx:
// <FactContainer>{randomFact}</FactContainer>
