import React, { useState } from 'react';
import Navbar from './components/Navbar';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-black relative">
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default App;