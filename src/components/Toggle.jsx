import React from 'react';
import { ToggleButton } from '@mui/material';
//!NTS: Don't think it's just the prop I'm missing
export default function Toggle({ darkModeEnabled }) {
  return (
    <div className="toggle-button">
      <ToggleButton
        /* To Mike: I feel like most of what needs to be here is on App.jsx, but I'm not sure if 
      I'm on the right track or not. setDarkModeEnabled can't be defined here. I've tried using
      theme, createTheme, and both of the darkmode variations to get it to work and 
      nothing is. Am I missing something obvious?
      */
        checked={darkModeEnabled}
        //!NTS: setDarkModeEnabled can't be defined--what prop are you missing?
        onChange={() => setDarkModeEnabled(!darkModeEnabled)}
      >
        Dark/Light
      </ToggleButton>
    </div>
  );
}
