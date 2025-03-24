import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Link, NavLink } from "react-router-dom";
import { Mountain, Facebook, Instagram, Youtube, Sun, Moon } from "lucide-react";

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
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <Mountain className="text-orange-500 group-hover:text-orange-600 transition-colors duration-300" size={36} />
          <span className="text-green-800 dark:text-green-200 font-semibold text-lg leading-tight group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300">
            Nutrify
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {[{ to: "/programs", label: "Programs" }, { to: "/library", label: "Library" }].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-green-800 dark:text-green-200 font-medium ${isActive ? "text-orange-500 dark:text-orange-400" : "hover:text-orange-500 dark:hover:text-orange-400"
                } transition-colors duration-300`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-3">

            <a href="https://www.instagram.com/fitwithpratham" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transform hover:scale-110 transition-all duration-300" />
            </a>
            <a href="https://www.youtube.com/@fitwithpratham" target="_blank" rel="noopener noreferrer">
              <Youtube size={20} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transform hover:scale-110 transition-all duration-300" />
            </a>
          </div>

          <button onClick={handleThemeToggle} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-green-800 dark:text-green-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300" aria-label="Toggle theme">
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {user ? (
            <button onClick={handleLogout} className="text-green-800 dark:text-green-200 font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-green-800 dark:text-green-200 font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
