import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 md:px-8 lg:px-16 lg:mx-40 relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-[#7562e0] transition-transform hover:text-white cursor-pointer">
        Karthik Varma
      </h1>

      {/* Hamburger / Close Button */}
      <button
        className="block md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          // Close (X mark) icon
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          // Hamburger icon
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        )}
      </button>

      {/* Navigation Links */}
      <ul
        className={`md:flex text-[15px] font-bold transition-all duration-300 ease-in-out ${
          menuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-[#94a3b8] md:static md:w-auto md:bg-transparent transform ${
          menuOpen ? 'translateY(0)' : 'translateY(-20px)'
        }`}
      >
        <li className="md:inline-block md:border-none">
          <a
            className="block py-4 px-6 text-white hover:text-[#7562e0] text-lg"
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>
        </li>
        <li className="md:inline-block md:border-none">
          <a
            className="block py-4 px-6 text-white hover:text-[#7562e0] text-lg"
            href="#about"
            onClick={closeMenu}
          >
            About me
          </a>
        </li>
        <li className="md:inline-block md:border-none">
          <a
            className="block py-4 px-6 text-white hover:text-[#7562e0] text-lg"
            href="#projects"
            onClick={closeMenu}
          >
            Projects
          </a>
        </li>
        <li className="md:inline-block">
          <a
            className="block py-4 px-6 text-white hover:text-[#7562e0] text-lg"
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
