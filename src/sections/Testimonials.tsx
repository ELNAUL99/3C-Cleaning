import React, { useState } from 'react';
import '../styles/_testimonials.scss';

const reviews = [
  { text: "3C Cleaning provides exceptional flexibility and outstanding workmanship. If you’re looking for reliable and professional cleaning services, I strongly recommend 3C Cleaning!", name: "Shanuka G.", link: "https://www.facebook.com/shanukasss/posts/pfbid0B8wmeuLDN18R7G71TDe6chot3fAf8hXTv8aexuaFxDi4r8En68nbJbsB8Aw8Sshfl" },
  { text: "Entisenä alan isomman toimijan kotisiivous asiakkaana päätin antaa  uudelle yrittäjälle mahdollisuuden ja tilasin testisiivouksen 3C:ltä. Palvelu oli joustavaa ja työn jälki erinomaista. Nyt hieman alle kaksi kuukautta viikottaisia siivouksia takana ja sama taso on säilynyt. Vahva suositus.", name: "Kristian L.", link: "https://www.facebook.com/kristian.latvala/posts/pfbid0ssVDsDWinJaedBJXNozjhw56DYLBv72oWbTYyzP7JARuNkRjAMFCRCTrGStQtvYNl" },
  { text: "Korkealaatuinen, tehokas ja ystävällinen palvelu, erittäin suositeltavaa.", name: "Inga N.", link: "https://www.facebook.com/inga.pichat/posts/pfbid023PDXo6S8uaoNTKhdrUEitrbaiQFEs5vqLPB55Qpoi6ce5xoKTLYttZc45rFZruoyl" },
  { text: "Thank you so much for all those pictures and your detailed report. You did really great job. I do appreciate. Please make an invoice for 4 hours. Let me book you in the middle of December please for another cleaning somewhere around 19th or 20th of December. If you can please send me an invoice I will pay it straight ahead. Have a great afternoon.", name: "Ville J.", link: "https://www.facebook.com/photo/?fbid=122125211396525108&set=pb.61565753254534.-2207520000" },
  { text: "Hi Alice! Thank you for cleaning the apartment so throughly.", name: "Katarina S.", link: "https://www.facebook.com/photo/?fbid=122124745190525108&set=pb.61565753254534.-2207520000" },
  { text: "I've always liked open hearted Asians. They showed that they care about other people. They worked quickly and yet very carefully. The work is perfect, full ten!", name: "Eira L.", link: "https://www.facebook.com/profile.php?id=61565753254534" },
  { text: "Thank you for your hard work in cleaning the apartment. I truly appreciate it. Wishing you continued success! Thanks once more!", name: "Sarah W.", link: "https://www.facebook.com/photo/?fbid=122122446230525108&set=pb.61565753254534.-2207520000" }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-slider">
        <button className="prev-btn" onClick={handlePrev}>❮</button>
        <div className="testimonial-item">
          <p className="review-text">"{reviews[currentIndex].text}"</p>
          <p className="customer-name">
            - <a href={reviews[currentIndex].link} target="_blank" rel="noopener noreferrer">{reviews[currentIndex].name}</a>
          </p>
        </div>
        <button className="next-btn" onClick={handleNext}>❯</button>
      </div>
      <div className="testimonial-dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
