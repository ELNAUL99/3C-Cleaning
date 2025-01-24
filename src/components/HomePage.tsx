import React from 'react';
import Hero from '../sections/Hero';
import Mission from '../sections/Mission';
import Benefits from '../sections/Benefits';
import Testimonials from '../sections/Testimonials';
import Faq from '../sections/FAQ';
import '../styles/_homepage.scss';

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <Hero />
      <Mission />
      <Benefits />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Homepage;
