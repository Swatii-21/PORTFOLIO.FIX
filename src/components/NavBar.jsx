<<<<<<< HEAD
=======
 
///////3

>>>>>>> 9defae5 (Fix: rebuilt git index)
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

const linkClasses =
<<<<<<< HEAD
  "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";

const NavLink = ({ to, onClick, children }) => (
  <li>
    <Link
      to={to}
      onClick={onClick}
      className={`${linkClasses}`}
      aria-current="page"
    >
=======
  "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-goldDesert lg:p-0 dark:text-gray-300 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white";

const NavLink = ({ to, onClick, children }) => (
  <li>
    <Link to={to} onClick={onClick} className={linkClasses}>
>>>>>>> 9defae5 (Fix: rebuilt git index)
      {children}
    </Link>
  </li>
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
<<<<<<< HEAD
    setIsOpen((prevState) => !prevState);
=======
    setIsOpen((prev) => !prev);
>>>>>>> 9defae5 (Fix: rebuilt git index)
  }, []);

  return (
    <header>
<<<<<<< HEAD
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-darkDesert fixed top-0 w-full z-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="/dev-icon.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Sara Dev Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Swatisingh.dev
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              onClick={toggleOpen}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <NavLink to="/" onClick={toggleOpen}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={toggleOpen}>
                About
              </NavLink>
              <NavLink to="/projects" onClick={toggleOpen}>
                Projects
              </NavLink>
              <NavLink to="/skills" onClick={toggleOpen}>
                Skills
              </NavLink>
              <NavLink to="/experience" onClick={toggleOpen}>
                Experience
              </NavLink>
              <NavLink to="/education" onClick={toggleOpen}>
                Education
              </NavLink>
              <NavLink to="/contact" onClick={toggleOpen}>
                Contact Me
              </NavLink>
              {/* <li>
                <a href="/baqla_resume.pdf" className={linkClasses}>
                  Resume
                </a>
              </li> */}
            </ul>
          </div>
        </div>
=======
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
>>>>>>> 9defae5 (Fix: rebuilt git index)
      </nav>
    </header>
  );
}
