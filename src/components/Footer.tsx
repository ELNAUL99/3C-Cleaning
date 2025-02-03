import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/_footer.scss';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.facebook.com/profile.php?id=61565753254534" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/3ccleaning/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wa.me/358451438656" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </div>
      <nav className="footer-nav">
        <ul>
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/services">{t('services')}</Link></li>
          <li><Link to="/aboutus">{t('aboutUs')}</Link></li>
          <li><Link to="/contact">{t('contactUs')}</Link></li>
        </ul>
      </nav>
      <div className="footer-bottom">
        <p>&copy; 2024 3C Cleaning Oy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
