import React from 'react';
import useNyeFact from '../hooks/useNyeFact';

import { ThemeProvider, createTheme, Card } from '@mui/material';
import Header from './Header';
import Button from './Button';
import FactContainer from './Fact-Container';

import './App.css';

function App() {
  const [randomFact, showNyeFact] = useNyeFact();

  const theme = createTheme({
    palette: {
      // Eventually, this should look something like `mode: darkMode ? 'dark' : 'light'`.
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card>
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
