import { useState, useEffect } from 'react';

export default function toggleTheme() {
  const [switchTheme, setNewTheme] = useState('');

  useEffect(() => {
    createTheme();
  }, []);

  const theme = createTheme({
    palette: {
      // Eventually, this should look something like `mode: darkMode ? 'dark' : 'light'`.
      mode: 'dark',
    },
  });

  return [switchTheme, setNewTheme];
}
