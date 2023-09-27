import React from 'react';
import { ToggleButton } from '@mui/material';

//Toggle Button
export default function Toggle({ darkModeEnabled, setDarkModeEnabled }) {
  return (
    <div className="toggle-button">
      <ToggleButton
        checked={darkModeEnabled}
        onChange={() => setDarkModeEnabled(!darkModeEnabled)}
      >
        🌙
      </ToggleButton>
    </div>
  );
}
