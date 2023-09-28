import React from 'react';
import { ToggleButton } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

//Toggle Button
export default function Toggle({ darkModeEnabled, setDarkModeEnabled }) {
  return (
    <div className="toggle-button">
      <ToggleButton
        checked={darkModeEnabled}
        onChange={() => setDarkModeEnabled(!darkModeEnabled)}
      >
        {darkModeEnabled ? <LightMode /> : <DarkMode />}
      </ToggleButton>
    </div>
  );
}
