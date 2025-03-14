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
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="left-logo">
        <Link to="/" onClick={() => location.pathname === '/' && scrollToTop()}>
          <img src={wordLogo} alt="3C Cleaning Word Logo" />
        </Link>
      </div>
      <nav className={menuOpen ? 'open' : ''} ref={menuRef}>
        <ul className="nav-left">
          <li><Link to="/" onClick={() => {location.pathname === '/' && scrollToTop(); handleLinkClick()}}>{t('home')}</Link></li>
          <li className="dropdown" onClick={toggleServices}>
            <span>{t('services')}</span>
            {servicesOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/home-cleaning-services" onClick={handleLinkClick}>{t('homeCleaningServices')}</Link></li>
                <li><Link to="/moving-cleaning-services" onClick={handleLinkClick}>{t('movingCleaningServices')}</Link></li>
                <li><Link to="/office-cleaning-services" onClick={handleLinkClick}>{t('officeCleaningServices')}</Link></li>
              </ul>
            )}
          </li>
        </ul>
        <div className="center-logo">
          <img src={logo} alt="3C Cleaning Image Logo" />
        </div>
        <ul className="nav-right">
          <li><Link to="/aboutus" onClick={handleLinkClick}>{t('aboutUs')}</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>{t('contactUs')}</Link></li>
        </ul>
        <div className={`language-switcher ${menuOpen ? 'open' : ''}`} ref={dropdownRef}>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faGlobe} />
        </button>
        {dropdownOpen && (
          <ul className="dropdown-menu">
            <li><Link to="#" onClick={() => {changeLanguage('en') ; handleLinkClick()}}>{t('english')}</Link></li>
            <li><Link to="#" onClick={() => {changeLanguage('fi'); handleLinkClick()}}>{t('finnish')}</Link></li>
          </ul>
        )}
      </div>
      </nav>
      <div className="hamburger-menu">
        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;
