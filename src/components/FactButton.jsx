import React from 'react';

//Fact Button
export default function FactButton({ showNyeFact }) {
  return (
    <div className="action-button">
      <button onClick={showNyeFact}>Get A Random Fact</button>
    </div>
  );
}
