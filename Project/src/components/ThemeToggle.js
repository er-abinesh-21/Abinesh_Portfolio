import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import '../styles/ThemeToggle.css';

/**
 * Theme toggle button component
 * @returns {JSX.Element} ThemeToggle component
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="theme-toggle__icon" />
      ) : (
        <Moon className="theme-toggle__icon" />
      )}
    </button>
  );
}

export default ThemeToggle;