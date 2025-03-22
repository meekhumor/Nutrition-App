import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice"; // Keep this for auth
import { Link, NavLink } from "react-router-dom";
import { Mountain, Facebook, Instagram, Youtube, Sun, Moon } from "lucide-react";

const Header = () => {
  const [theme, setTheme] = useState("light"); // Local state for theme
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = useSelector((state) => state.auth.user); // Keep Redux for auth
  const dispatch = useDispatch();

  // Sync theme with DOM
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-2 group">
          <Mountain 
            className="text-orange-500 group-hover:text-orange-600 transition-colors duration-300" 
            size={36} 
          />
          <span className="text-green-800 dark:text-green-200 font-semibold text-lg leading-tight group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300">
            Nutrify
          </span>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { to: "/programs", label: "Programs" },
            { to: "/library", label: "Library" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-green-800 dark:text-green-200 font-medium ${
                  isActive 
                    ? "text-orange-500 dark:text-orange-400" 
                    : "hover:text-orange-500 dark:hover:text-orange-400"
                } transition-colors duration-300`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Social Icons, Theme Toggle, and Auth - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            {[Facebook, Instagram, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transform hover:scale-110 transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-green-800 dark:text-green-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Auth Section */}
          {user ? (
            <button
              onClick={handleLogout}
              className="text-green-800 dark:text-green-200 font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-green-800 dark:text-green-200 font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-green-800 dark:text-green-200 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-6 py-4 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {[
              { to: "/programs", label: "Programs" },
              { to: "/library", label: "Library" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  `text-green-800 dark:text-green-200 font-medium ${
                    isActive 
                      ? "text-orange-500 dark:text-orange-400" 
                      : "hover:text-orange-500 dark:hover:text-orange-400"
                  } transition-colors duration-300`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="flex space-x-3">
              {[Facebook, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transform hover:scale-110 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <button
              onClick={() => {
                handleThemeToggle();
                toggleMobileMenu();
              }}
              className="flex items-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-green-800 dark:text-green-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 w-fit"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              <span className="ml-2">{theme === "light" ? "Dark" : "Light"}</span>
            </button>
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMobileMenu();
                }}
                className="text-green-800 dark:text-green-200 font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 text-left"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={toggleMobileMenu}
                className="text-green-800 dark:text-green-200 font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;