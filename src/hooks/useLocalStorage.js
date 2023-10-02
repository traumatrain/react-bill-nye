import { useState, useEffect } from 'react';

export default function useLocalStorage(
  darkmodeStorage = 'local-storage-dark'
) {
  const [darkModeEnabled, setDarkModeEnabled] = useState(() => {
    return JSON.parse(localStorage.getItem(darkmodeStorage)) ?? true;
  });

  useEffect(() => {
    localStorage.setItem(darkmodeStorage, JSON.stringify(darkModeEnabled));
  }, [darkModeEnabled, darkmodeStorage]);

  //secondary code option use of function getLocalStorage
  /*function getLocalStorage() {
    let storedDarkMode = localStorage.getItem(darkmodeStorage);
    storedDarkMode = JSON.parse(storedDarkMode);
    if (storedDarkMode === undefined || storedDarkMode === null) {
      storedDarkMode = true;
    }
    return storedDarkMode;
  }*/

  return [darkModeEnabled, setDarkModeEnabled];
}
