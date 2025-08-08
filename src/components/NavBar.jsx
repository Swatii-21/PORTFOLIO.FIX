 
///////3

import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

const linkClasses =
  "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-goldDesert lg:p-0 dark:text-gray-300 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white";

const NavLink = ({ to, onClick, children }) => (
  <li>
    <Link to={to} onClick={onClick} className={linkClasses}>
      {children}
    </Link>
  </li>
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <header>
      <nav className="bg-white dark:bg-darkDesert shadow-md fixed top-0 w-full z-50">
        {/* Main Navbar */}
        <div className="w-full px-4 lg:px-8 flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center">
            <img src="/dev-icon.svg" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-semibold dark:text-white">Swati.dev</span>
          </Link>

          {/* Right: Desktop Nav */}
          <ul className="hidden lg:flex list-none space-x-8 font-medium">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>

          {/* Hamburger: Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleOpen}
              className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden px-4 pt-2 pb-4 space-y-2 bg-white dark:bg-darkDesert font-medium">
            <ul className="flex flex-col list-none space-y-2">
              <NavLink to="/" onClick={toggleOpen}>Home</NavLink>
              <NavLink to="/about" onClick={toggleOpen}>About</NavLink>
              <NavLink to="/projects" onClick={toggleOpen}>Projects</NavLink>
              <NavLink to="/skills" onClick={toggleOpen}>Skills</NavLink>
              <NavLink to="/experience" onClick={toggleOpen}>Experience</NavLink>
              <NavLink to="/education" onClick={toggleOpen}>Education</NavLink>
              <NavLink to="/contact" onClick={toggleOpen}>Contact</NavLink>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
