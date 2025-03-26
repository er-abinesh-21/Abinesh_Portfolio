import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from './useTheme';
import Logo from './Images/Logo.png'; // Correct import
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__content">

          {/* Logo */}
          <div className="navbar__logo">
            <img src={Logo} alt="Logo" className="navbar__logo-image" /> {/* Fixed here */}
          </div>

          {/* Desktop Navigation */}
          <div className="navbar__desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar__desktop-link"
                activeClass="navbar__desktop-link--active"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="navbar__desktop-right">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="navbar__theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="navbar__theme-icon" />
              ) : (
                <Moon className="navbar__theme-icon" />
              )}
            </button>

            {/* Social Links - Desktop */}
            <div className="navbar__desktop-social">
              <a
                href="https://github.com/er-abinesh-21"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__social-link"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/abinesh21"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__social-link"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:21abinesh@gmail.com"
                className="navbar__social-link"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar__menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="navbar__dropdown"
            >
              <div className="navbar__dropdown-links">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="navbar__dropdown-link"
                    activeClass="navbar__dropdown-link--active"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Theme Toggle - Mobile */}
              <button
                onClick={toggleTheme}
                className="navbar__dropdown-theme-toggle"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun size={20} />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={20} />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>

              <div className="navbar__dropdown-social">
                <a
                  href="https://github.com/er-abinesh-21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar__social-link"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/abinesh21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar__social-link"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:21abinesh@gmail.com"
                  className="navbar__social-link"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;