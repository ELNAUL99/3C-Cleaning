import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import '../styles/_header.scss';
import wordLogo from '../assets/wordLogo.png';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
      <nav>
        <ul className="nav-left">
          <li><Link to="/" onClick={() => location.pathname === '/' && scrollToTop()}>Home</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
        <div className="center-logo">
          <img src={logo} alt="3C Cleaning Image Logo" />
        </div>
        <ul className="nav-right">
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="language-switcher" ref={dropdownRef}>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faGlobe} />
        </button>
        {dropdownOpen && (
          <ul className="dropdown-menu">
            <li><Link to="/" onClick={() => {/* handle language change to English */}}>English</Link></li>
            <li><Link to="/" onClick={() => {/* handle language change to Suomi */}}>Suomi</Link></li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
