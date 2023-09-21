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
<<<<<<< HEAD
=======
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);
>>>>>>> c6b23868597a7a56e7ba5e137cc0625f7569f66e

  const theme = createTheme({
    palette: {
      mode: darkModeEnabled ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card>
<<<<<<< HEAD
        <div>
          <Toggle onClick={theme} />
        </div>
=======
        {/*  <Toggle onClick={switchTheme} /> */}
>>>>>>> c6b23868597a7a56e7ba5e137cc0625f7569f66e
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
