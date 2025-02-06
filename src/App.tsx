import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
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
              <Route path="/services" element={<Services />} />
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
