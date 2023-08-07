import React from 'react';
import brain from '../assets/brain-colorful.svg';
import flask from '/chemical-science.svg';

function Header() {
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
    </>
  );
}

export default Header;
