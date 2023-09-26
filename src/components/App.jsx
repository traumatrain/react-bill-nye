import React, { useState } from 'react';
import useNyeFact from '../hooks/useNyeFact';
//is "ToggleButton" needed?
import { ThemeProvider, createTheme, Card, ToggleButton } from '@mui/material';
import Header from './Header';
import Button from './Button';
import FactContainer from './Fact-Container';
//import Toggle from './Toggle';

import './App.css';

function App() {
  const [randomFact, showNyeFact] = useNyeFact();
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);
  // true = darkmode false = light mode
  /* boolean makes complete sense, figuring out how to change the boolean to change with toggle is not
  you had me get rid of {OnClick} and toggle doesn't look like a toggle but like a button. 
  concerned I'm getting colder */

  const theme = createTheme({
    palette: {
      mode: darkModeEnabled ? 'dark' : 'light',
      //mode: setDarkModeEnabled <-- is this where we're going with this?
    },
  });
  //should Toggle be ToggleButton or Toggle based on imports from @mui?
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <ToggleButton
          checked={darkModeEnabled}
          onChange={({ target }) => setDarkModeEnabled(target.checked)} //am I on the right track here?
          //found the above online @: https://blog.logrocket.com/dark-mode-react-in-depth-guide/
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
