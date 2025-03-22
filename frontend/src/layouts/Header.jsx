import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { logout } from "../redux/authSlice";
import { Link, NavLink } from "react-router-dom";
import { Mountain, Facebook, Instagram, Youtube, Sun, Moon } from "lucide-react";

const Header = () => {
  const theme = useSelector((state) => state.theme.value);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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
          <span className="text-green-800 dark:text-green-200 font-semibold text-lg leading-tight group-hover:text-green-700 transition-colors duration-300">
            Conquering My<br />Own Everest
          </span>
        </Link>

        {/* Navigation Links */}
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

        {/* Social Icons, Theme Toggle, and Auth */}
        <div className="flex items-center space-x-4">
          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
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
            onClick={() => dispatch(toggleTheme())}
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

        {/* Mobile Menu Toggle (Optional) */}
        <button className="md:hidden text-green-800 dark:text-green-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;