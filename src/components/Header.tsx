import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../contexts/LanguageProvider';
import { useTranslation } from 'react-i18next';
import '../styles/_header.scss';
import wordLogo from '../assets/wordLogo.png';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="left-logo">
        <Link to="/" onClick={() => location.pathname === '/' && scrollToTop()}>
          <img src={wordLogo} alt="3C Cleaning Word Logo" />
        </Link>
      </div>
      <nav className={menuOpen ? 'open' : ''}>
        <ul className="nav-left">
          <li><Link to="/" onClick={() => location.pathname === '/' && scrollToTop()}>{t('home')}</Link></li>
          <li><Link to="/services">{t('services')}</Link></li>
        </ul>
        <div className="center-logo">
          <img src={logo} alt="3C Cleaning Image Logo" />
        </div>
        <ul className="nav-right">
          <li><Link to="/aboutus">{t('aboutUs')}</Link></li>
          <li><Link to="/contact">{t('contactUs')}</Link></li>
        </ul>
      </nav>
      <div className="language-switcher" ref={dropdownRef}>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faGlobe} />
        </button>
        {dropdownOpen && (
          <ul className="dropdown-menu">
            <li><Link to="#" onClick={() => changeLanguage('en')}>{t('english')}</Link></li>
            <li><Link to="#" onClick={() => changeLanguage('fi')}>{t('finnish')}</Link></li>
          </ul>
        )}
      </div>
      <div className="hamburger-menu">
        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;
