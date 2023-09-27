import React from 'react';
import { ToggleButton } from '@mui/material';
//!NTS: Don't think it's just the prop I'm missing
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
