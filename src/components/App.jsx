import React from 'react';
import useNyeFact from '../hooks/useNyeFact';
import useLocalStorage from '../hooks/useLocalStorage';
import { ThemeProvider, createTheme, Card } from '@mui/material';
import Header from './Header';
import FactButton from './FactButton';
import FactContainer from './FactContainer';
import DarkModeToggle from './DarkModeToggle';

import './App.css';

function App() {
  const [randomFact, showNyeFact] = useNyeFact();
  const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage();

  const theme = createTheme({
    palette: {
      mode: darkModeEnabled ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <DarkModeToggle {...{ darkModeEnabled, setDarkModeEnabled }} />
        <div className="app-primary">
          <Header />
          <FactButton showNyeFact={showNyeFact} />
          <FactContainer>{randomFact}</FactContainer>
        </div>
      </Card>
    </ThemeProvider>
  );
}

export default App;
