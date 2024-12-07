import React, { useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'bg-white text-black' : 'bg-gray-900 text-white';
  };

  return <button onClick={toggleTheme}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>;
};

export default ThemeToggle;
