import React from 'react';
import Hero from '../sections/Hero';
import Benefits from '../sections/Benefits';
import Testimonials from '../sections/Testimonials';
import Faq from '../sections/FAQ';
import '../styles/_homepage.scss';

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <Hero />
      <Benefits />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Homepage;
