import React from 'react';
import { Link } from 'react-scroll';
import { Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

/**
 * Footer component with links and copyright
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 10, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer__background"></div>
      
      <div className="footer__container">
        <div className="footer__content">
          {/* Brand */}
          <div className="footer__brand">
            <h3 className="footer__logo">
              Abinesh B
            </h3>
            <p className="footer__tagline">
              MERN Stack Developer crafting beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__links-section">
            <h4 className="footer__section-title">Quick Links</h4>
            <ul className="footer__links-list">
              {footerLinks.map((link) => (
                <li key={link.name} className="footer__link-item">
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="footer__link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__contact-section">
            <h4 className="footer__section-title">Contact</h4>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">Kathirkamam, Puducherry</li>
              <li className="footer__contact-item">
                <a 
                  href="mailto:21abinesh@gmail.com"
                  className="footer__contact-link"
                >
                  21abinesh@gmail.com
                </a>
              </li>
              <li className="footer__contact-item">+91 98435 59795</li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer__social-section">
            <h4 className="footer__section-title">Follow Me</h4>
            <div className="footer__social-links">
              <a
                href="https://github.com/er-abinesh-21"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/abinesh21"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Abinesh B. Made with 
            <Heart className="footer__heart-icon" /> 
            in Puducherry
          </p>
          
          <button
            onClick={scrollToTop}
            className="footer__scroll-top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="footer__arrow-icon" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;