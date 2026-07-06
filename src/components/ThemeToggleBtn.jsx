import React, { useEffect } from 'react';
import assets from '../assets/assets';

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={toggleTheme} className="cursor-pointer">
      <img
        src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
        alt="Theme Toggle"
        className="size-9 p-1.5 border border-gray-500 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
      />
    </button>
  );
};

export default ThemeToggleBtn;