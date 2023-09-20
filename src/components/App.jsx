import React, { useState } from 'react';
import useNyeFact from '../hooks/useNyeFact';

import { ThemeProvider, createTheme, Card } from '@mui/material';
import Header from './Header';
import Button from './Button';
import FactContainer from './Fact-Container';
import Toggle from './Toggle';

import './App.css';

function App() {
  const [randomFact, showNyeFact] = useNyeFact();
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkModeEnabled ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card>
        {/*  <Toggle onClick={switchTheme} /> */}
        <div className="app-primary">
          <Header />
          <Button showNyeFact={showNyeFact} />
          <FactContainer>{randomFact}</FactContainer>
        </div>
      </Card>
    </ThemeProvider>
  );
}

export default App;
