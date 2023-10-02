import { useState, useEffect } from 'react';

export default function useLocalStorage(darkmodeStorage="local-storage-dark") {
  const [darkModeEnabled, setDarkModeEnabled] = useState(() =>
    getLocalStorage(darkmodeStorage="local-storage-dark")
  );

  useEffect(() => {
    localStorage.setItem(
      "local-storage-dark",
      JSON.stringify(darkModeEnabled, setDarkModeEnabled)
    );
  });

  function getLocalStorage() {
    localStorage.getItem(JSON.parse("local-storage-dark"));
    if () {
    }
  }

  return [];
}
