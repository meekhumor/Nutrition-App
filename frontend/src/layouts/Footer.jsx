import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, ChevronUp, ChevronDown } from 'lucide-react';

const Footer = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navLinks = [
    { href: '#introduction', label: 'Introduction' },
    { href: '#foundation', label: 'Foundation' },
    { href: '#continuation', label: 'Continuation' },
    { href: '#recipes', label: 'Recipes' },
    { href: '#blogs', label: 'Blogs' },
    { href: '#resources', label: 'Resources' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <footer className="w-full bg-green-50 dark:bg-gray-800 px-4 py-6 text-gray-600 dark:text-gray-300 transition-colors duration-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="" 
            className="h-10 w-10 rounded-full shadow-md transform hover:scale-110 transition-transform duration-300" 
          />
          <span className="ml-3 text-green-800 dark:text-green-200 font-semibold text-lg hidden md:block">
            Nutrify
          </span>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-auto">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleNav}
              className="flex items-center w-full justify-between p-2 bg-green-100 dark:bg-gray-700 rounded-lg text-green-800 dark:text-green-200 hover:bg-green-200 dark:hover:bg-gray-600 transition-all duration-300"
              aria-label="Toggle footer navigation"
            >
              <span>Menu</span>
              {isNavOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {/* Mobile Navigation Dropdown */}
            {isNavOpen && (
              <nav className="mt-2 flex flex-col space-y-2 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg animate-fade-in-up">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition-colors duration-300"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {[Facebook, Instagram, Youtube].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transform hover:scale-110 transition-all duration-300"
              aria-label={`Visit our ${Icon.name} page`}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Nutrify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;