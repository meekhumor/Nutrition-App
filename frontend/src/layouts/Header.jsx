import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Link, NavLink } from "react-router-dom";
import { Instagram, Youtube, Sun, Moon, Menu, X } from "lucide-react";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900/95 backdrop-blur-sm shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group space-x-4">
          <img src="/logo.svg" alt="Fit with Pratham Logo" className="w-9 block dark:hidden" />
          <img src="/logo1.svg" alt="Fit with Pratham Logo Dark" className="w-9 hidden dark:block" />
          <span className="text-teal-600 dark:text-teal-400 font-semibold text-xl leading-tight duration-300">
            Fit with Pratham
          </span>
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-lg">
          {[{ to: "/", label: "Home" }, { to: "/about", label: "About Me" }, { to: "/programs", label: "Programs" }].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                ` text-teal-700 dark:text-teal-400 font-medium ${isActive ? "text-yellow-500 dark:text-yellow-400" : "hover:text-yellow-500 dark:hover:text-yellow-400"} transition-colors duration-300`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://www.instagram.com/fitwithpratham" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transform hover:scale-110 transition-all duration-300" />
          </a>
          <a href="https://www.youtube.com/@fitwithpratham" target="_blank" rel="noopener noreferrer">
            <Youtube size={20} className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transform hover:scale-110 transition-all duration-300" />
          </a>
          <button 
            onClick={handleThemeToggle} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800/50 text-green-800 dark:text-green-400 hover:bg-gray-300 dark:hover:bg-gray-700/50 transition-all duration-300" 
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-3">
          <button 
            onClick={handleThemeToggle} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800/50 text-green-800 dark:text-green-400 hover:bg-gray-300 dark:hover:bg-gray-700/50 transition-all duration-300" 
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={toggleMobileMenu} 
            className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300" 
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-white dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800/50 space-y-4">
          {[{ to: "/", label: "Home" }, { to: "/about", label: "About Me" }, { to: "/programs", label: "Programs" }].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block text-green-800 dark:text-green-300 font-medium ${isActive ? "text-yellow-500 dark:text-yellow-400" : "hover:text-yellow-500 dark:hover:text-yellow-400"} transition-colors duration-300`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="flex justify-center space-x-6 pt-2 border-t border-gray-300 dark:border-gray-800/50">
            <a href="https://www.instagram.com/fitwithpratham" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transform hover:scale-110 transition-all duration-300" />
            </a>
            <a href="https://www.youtube.com/@fitwithpratham" target="_blank" rel="noopener noreferrer">
              <Youtube size={24} className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transform hover:scale-110 transition-all duration-300" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;