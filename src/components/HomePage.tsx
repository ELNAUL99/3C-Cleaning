import React from 'react';
import Hero from '../sections/Hero';
import Benefits from '../sections/Benefits';
import Testimonials from '../sections/Testimonials';
import Transformations from '../sections/Transformations';
import Faq from '../sections/FAQ';
import Order from '../sections/Order';
import '../styles/_homepage.scss';

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <Hero />
      <Benefits />
      <Testimonials />
      <Transformations />
      <Faq />
      <Order />
    </div>
  );
};

export default Homepage;
