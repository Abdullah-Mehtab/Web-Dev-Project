// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('default'); // 'default' or 'dark'

  useEffect(() => {
    // If a preferred theme is stored, use it
    const stored = localStorage.getItem('theme');
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    // Update localStorage
    localStorage.setItem('theme', theme);

    // Set body class to reflect the current theme
    document.body.classList.remove('default-theme', 'dark-theme');
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('default-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'default' ? 'dark' : 'default'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
