import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import HomeCleaningServices from './components/HomeCleaningServices';
import MovingCleaningServices from './components/MovingCleaningServices';
import OfficeCleaningServices from './components/OfficeCleaningServices';
import { LanguageProvider } from './contexts/LanguageProvider';
import './styles/main.scss';
import './i18n/i18n'; 

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home-cleaning-services" element={<HomeCleaningServices />} />
              <Route path="/moving-cleaning-services" element={<MovingCleaningServices />} />
              <Route path="/office-cleaning-services" element={<OfficeCleaningServices />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;