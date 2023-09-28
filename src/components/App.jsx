import React, { useState } from 'react';
import useNyeFact from '../hooks/useNyeFact';
import { ThemeProvider, createTheme, Card } from '@mui/material';
import Header from './Header';
import Button from './Button';
import FactContainer from './Fact-Container';
import DarkModeToggle from './DarkModeToggle';

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
        <DarkModeToggle
          darkModeEnabled={darkModeEnabled}
          setDarkModeEnabled={setDarkModeEnabled}
        />
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
