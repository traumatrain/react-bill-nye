import React from 'react';
import { ToggleButton } from '@mui/material';
//should I use createTheme or theme here?
export default function Toggle({ theme }) {
  return (
    <div className="toggle-button">
      <ToggleButton onClick={theme}>ON/OFF</ToggleButton>
    </div>
  );
}
