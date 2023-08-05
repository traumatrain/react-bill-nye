import React from 'react';

export default function FactContainer({ children }) {
  return (
    <div className="fact-container">
      <p>{children}</p>
    </div>
  );
}

// another way to do this
// FactContainer({ children })
// <p>{children}</p>
// on App.jsx:
// <FactContainer>{randomFact}</FactContainer>
