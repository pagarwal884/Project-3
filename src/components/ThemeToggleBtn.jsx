// ===== THEME TOGGLE BUTTON COMPONENT =====
// This component handles switching between dark and light modes
// It also saves the user's preference in browser storage

import React, { useEffect } from 'react';
import assets from '../assets/assets'; // Import images (sun and moon icons)

const ThemeToggleBtn = ({ theme, setTheme }) => {
  // theme: Current theme ('dark' or 'light')
  // setTheme: Function to change the theme

  // ===== INITIALIZE THEME ON FIRST LOAD =====
  // This useEffect checks system preferences if no saved theme exists
  useEffect(() => {
    // Check if system prefers dark mode (note: there's a typo in original - 'prefers-color-schema')
    const prefersDarkMode = window.matchMedia('(prefers-color-schema: dark').matches

    // If no theme is saved, use system preference
    setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
  })

  // ===== APPLY THEME TO DOCUMENT =====
  // This useEffect runs whenever theme changes
  useEffect(() => {
    // Add or remove 'dark' class on the HTML element
    // Tailwind CSS uses this class to apply dark mode styles
    document.documentElement.classList.toggle('dark', theme === 'dark');
    // Save theme to browser storage so it persists after page reload
    localStorage.setItem('theme', theme);
  }, [theme]); // Re-run this when theme changes

  // ===== TOGGLE THEME FUNCTION =====
  // This runs when user clicks the button
  const toggleTheme = () => {
    // Switch between dark and light
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    // Button to toggle theme
    <button onClick={toggleTheme} className="cursor-pointer">
      {/* Show different icon based on current theme */}
      <img
        // Show sun icon in dark mode, moon icon in light mode
        src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
        alt="Theme Toggle"
        className="size-9 p-1.5 border border-gray-500 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
      />
    </button>
  );
};

export default ThemeToggleBtn;

export default ThemeToggleBtn;