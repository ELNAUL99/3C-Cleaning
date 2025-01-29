import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/_serviceInclude.scss';

const ServiceInclude: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const services = [
    { 
      question: "Generally, in all facilities", 
      answer: `- Dusting of horizontal surfaces (at the height of max. 1.8 meters)
      - Cleaning stains from doors, door handles, and light switches
      - Wiping mirrors and glass surfaces (excluding windows)
      - Dusting window sills (at the height of max. 1.8m)
      - Vacuuming floors and baseboards
      - Vacuuming carpets (considering the material of the carpets)
      - Mopping the floors (taking into account the floor material)
      - Organizing things neatly
      `
    },
    { 
      question: "In the kitchen", 
      answer: `- Cleaning the sink and faucets
      - Cleaning horizontal surfaces (at the height of max. 1.8 m)
      - Cleaning the stove
      - Cleaning the splashback tiles
      - Stain cleaning of the microwave, refrigerator, oven, stove, and dishwasher from the outer surfaces
      - Wiping and polishing kitchen appliances (toaster, coffee machine, etc.)
      - Cleaning the inside of the microwave oven
      - Cleaning of the trash cabinet and trash cans
      - Putting dirty dishes in the dishwasher
      `
    },
    { 
      question: "Bathroom and WC", 
      answer: `- Cleaning of horizontal surfaces (max 1.8 m high)
      - Washing the sink and the bathtub
      - Cleaning the toilet seat and its surroundings
      - Cleaning of faucets and shower head
      - Cleaning the glass shower wall
      - Cleaning the grate of the floor drain in the shower room
      - Cleaning the sauna door
      - Vacuuming and mopping the sauna floor where possible reach
      - Cleaning stains from the outer surfaces of the washing machine and dryer
      `
    },
    { 
      question: "In the bedroom and other rooms", 
      answer: `
      - Dusting picture frames, lampshades, and high horizontal surfaces (at the height of max. 1.8m)
      - Making the bed
      - Vacuuming the sofa and upholstered furniture
      `
    },
    { 
      question: "Additionally, upon request", 
      answer: `- Emptying and taking out the garbage (requires access to the garbage shelter)
      - Moving heavy furniture (over 6 kg) and cleaning behind it
      - Cleaning the balcony (e.g., floor, furniture)
      - Cleaning the cabinets from the inside
      - Cleaning surfaces over 1.8 m (requires a small ladder or stool)
      - Cleaning stains from the walls (Please note that stain removal can leave a mark on the wall.)
      - Deep cleaning of bathroom floor tiles by brushing
      - Wiping the entire height of the bathroom walls
      - Cleaning of radiators
      - Cleaning the blinds from dust
      - Cleaning plants from dust
      - Sauna washing +30-45 min (depending on the size of the sauna)
      - Cleaning the inside of the refrigerator +45-60 min/single-door refrigerator
      - Cleaning the inside of the oven +45-75 min (depending on the cleaning need)
      - Extraction and cleaning of the cooker hood filter +30 min
      - Changing bed linen +20-40 min (depending on the size and type of bed subject to)
      - Ironing
      - Washing dishes by hand
      - Removing difficult stains (for example, paint, lime, etc.)
      `
    }
  ];

  return (
    <div className="service-include">
      <h3>What does our service include?</h3>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-question" onClick={() => toggleSection(index)}>
              <h4>{service.question}</h4>
              <FontAwesomeIcon icon={openIndices.includes(index) ? faChevronUp : faChevronDown} />
            </div>
            {openIndices.includes(index) && (
              <div className="service-answer">
                <p>{service.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceInclude;
