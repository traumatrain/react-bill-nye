import React from 'react';

export default function FactContainer({ children }) {
  return (
    <div className="fact-container">
      <p>{children}</p>
    </div>
  );
}
