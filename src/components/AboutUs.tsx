import React from 'react';
import '../styles/_aboutus.scss';
import cleanImage from '../assets/aboutus1.png'; 
import caringImage from '../assets/aboutus2.jpg';
import cheerfulImage from '../assets/aboutus3.jpg';

const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <div className="about-heading">
        <h2>About Us</h2>
      </div>
      <div className="content-layer">
        <h2 className="quote">At 3C Cleaning, we clean, you relax.</h2>
        <p className="subheading">3C stands for cleaning, caring, and cheerful.</p>
        <div className="about-section">
          <div className="about-item">
            <div className="about-content">
              <h3>Cleaning</h3>
              <p>
                At 3C Cleaning, cleanliness is at the heart of everything we do. We understand that a clean environment is not just about aesthetics,
                but also about creating a healthy and productive space for you and your loved ones. Our expert team uses state-of-the-art equipment and
                environmentally-friendly cleaning products to ensure that every nook and cranny is spotless. From residential homes to commercial spaces,
                we tailor our services to meet the unique needs of each client. We pride ourselves on our attention to detail, leaving no surface untouched,
                so you can enjoy the comfort and peace of mind that comes with a truly clean space.
              </p>
            </div>
            <div className="about-image">
              <img src={cleanImage} alt="Clean" />
            </div>
          </div>
          <div className="about-item reverse">
            <div className="about-content">
              <h3>Caring</h3>
              <p>
                Caring for our clients and their spaces is what sets 3C Cleaning apart. We believe that exceptional cleaning services go hand in hand with
                exceptional customer care. Our dedicated team takes the time to understand your specific requirements and preferences, ensuring that our
                services are personalized to your needs. Whether it's accommodating special requests or offering flexible scheduling, we go the extra mile
                to make sure you are completely satisfied. We also care about the environment and our community, which is why we use eco-friendly products
                and support local initiatives. At 3C Cleaning, we don't just clean—we care.
              </p>
            </div>
            <div className="about-image">
              <img src={caringImage} alt="Caring" />
            </div>
          </div>
          <div className="about-item">
            <div className="about-content">
              <h3>Cheerful</h3>
              <p>
                A cheerful attitude is a cornerstone of our service at 3C Cleaning. We believe that a positive outlook can make all the difference in the world.
                Our friendly and professional staff approach each job with enthusiasm and a smile, bringing a sense of joy to their work that shines through in
                the results. We understand that inviting someone into your home or workplace is a big deal, and we strive to create a pleasant and stress-free
                experience for you. Our cheerful demeanor is not just about making you feel good; it's about fostering a positive relationship and building trust
                with our clients. With 3C Cleaning, you can expect not only immaculate spaces but also a service that brightens your day.
              </p>
            </div>
            <div className="about-image">
              <img src={cheerfulImage} alt="Cheerful" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
