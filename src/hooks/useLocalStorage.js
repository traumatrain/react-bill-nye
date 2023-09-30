import { useState, useEffect } from 'react';

export default function useLocalStorage() {
  const [darkModeEnabled, setDarkModeEnabled] = useState('');
  //!NTS: research how to connect localStorage.setItem and localStorage.getItem
  localStorage.setItem('dark', JSON.stringify(darkModeEnabled));
  localStorage.setItem('light', JSON.stringify(setDarkModeEnabled));

  localStorage.getItem(JSON.parse(darkModeEnabled));
  localStorage.getItem(JSON.parse(setDarkModeEnabled));

  useEffect(() => {}); //!NTS: figure out what goes here

  return [useLocalStorage]; //or JSON.parse(darkModeEnabled), JSON.parse(setDarkModeEnabled)?
}
