import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../sections/Hero';
import Benefits from '../sections/Benefits';
import Testimonials from '../sections/Testimonials';
import Transformations from '../sections/Transformations';
import Faq from '../sections/FAQ';
import Order from '../sections/Order';
import '../styles/_homepage.scss';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>3C Cleaning - Siivouspalvelut Helsingissä, Espoossa ja Vantaalla</title>
        <meta name="description" content="3C Cleaning tarjoaa ammattimaiset kotisiivous-, muuttosiivous- ja toimistosiivouspalvelut Helsingissä, Espoossa, Vantaalla ja Kauniaisissa. Pyydä ilmainen tarjous!" />
        <link rel="canonical" href="https://www.3ccleaning.fi/" />
      </Helmet>
      <div className="homepage">
        <Hero />
        <Benefits />
        <Testimonials />
        <Transformations />
        <Faq />
        <Order />
      </div>
    </>
  );
};

export default HomePage;
