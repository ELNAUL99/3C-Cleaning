import React from 'react';
import '../styles/_hero.scss';
import image1 from '../assets/image1.jpg'; // Update the paths to your actual image files
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Hero: React.FC = () => {
  return (
    
      <div id="wrap" className="oe_structure">
        <section className="s_banner o_cc o_cc5">
          <div className="container-fluid">
            <div className="row o_grid_mode">
              <div className="o_grid_item col-lg-10">
                <h1 className="display-1">Generation<br/>Cleaning Services.</h1>
              </div>
              <div className="o_grid_item col-lg-5">
                <img className="img img-fluid mx-auto" src={image1} alt="" loading="lazy"/>
              </div>
              <div className="o_grid_item col-lg-4">
                <img className="img img-fluid mx-auto" src={image2} alt="" loading="lazy"/>
              </div>
            </div>
          </div>
        </section>
        <section className="s_text_block pb40 o_cc o_cc5 pt112">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-2 pb16">
                <p className="o_small">⎯ OUR MISSION</p>
              </div>
              <div className="col-lg-10 offset-lg-2 pb16">
                <h2>Cleaning excellence<br/>meets reliability</h2>
              </div>
              <div className="col-lg-4 offset-lg-2">
                <p>Our family-owned cleaning service combines expertise with a personal touch...</p>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <p>With years of experience in the cleaning industry...</p>
              </div>
            </div>
          </div>
        </section>
        <section className="s_striped o_cc o_cc5 pt56 pb0">
          <div className="o_we_shape"></div>
          <div className="container">
            <div className="row o_grid_mode">
              <div className="col-lg-8 offset-lg-2 o_grid_item o_grid_item_image">
                <img className="img img-fluid" src={image3} alt="" loading="lazy"/>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Hero;
