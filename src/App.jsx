import React, { useState } from 'react';
import Navbar from './components/Navbar';

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;