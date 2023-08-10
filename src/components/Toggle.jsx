import React from 'react';
import { ToggleButton } from '@mui/material';

export default function Toggle({ switchTheme }) {
  return (
    <div className="toggle-button">
      <ToggleButton onClick={switchTheme}>ON/OFF</ToggleButton>
    </div>
  );
}
