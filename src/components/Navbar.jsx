import { useState } from 'react';
import assets from '../assets/assets';
import ThemeToggleBtn from './ThemeToggleBtn';

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl bg-white/50 dark:bg-gray-900/70 transition-colors duration-300">

      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        alt="Logo"
        className="w-32 sm:w-40"
      />

      <div
        className={`flex text-gray-700 dark:text-white sm:text-sm gap-5
        max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:right-0
        ${
          sidebarOpen
            ? 'max-sm:w-60 max-sm:pl-10'
            : 'max-sm:w-0 max-sm:overflow-hidden'
        }
        max-sm:min-h-screen max-sm:h-full
        max-sm:flex-col max-sm:bg-primary
        max-sm:text-white max-sm:pt-20
        sm:items-center transition-all duration-300`}
      >
        <img
          src={assets.close_icon}
          alt="Close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <a href="#" onClick={() => setSidebarOpen(false)}>
          Home
        </a>

        <a href="#services" onClick={() => setSidebarOpen(false)}>
          Services
        </a>

        <a href="#our-work" onClick={() => setSidebarOpen(false)}>
          Our Work
        </a>

        <a href="#contact-us" onClick={() => setSidebarOpen(false)}>
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-3">

        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
          alt="Menu"
          className="w-6 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />

        <a
          href="#contact-us"
          className="hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:scale-105 transition"
        >
          Connect
          <img src={assets.arrow_icon} alt="Arrow" width={14} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;