import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/_serviceInclude.scss';
import { useTranslation } from 'react-i18next';

const ServiceInclude: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const { t } = useTranslation();

  const toggleSection = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const services = [
    { 
      question: t('homeService1Question'), 
      answer: t('homeService1Answer'),
    },
    { 
      question: t('homeService2Question'), 
      answer: t('homeService2Answer'),
    },
    { 
      question: t('homeService3Question'), 
      answer: t('homeService3Answer'),
    },
    { 
      question: t('homeService4Question'), 
      answer: t('homeService4Answer'),
    },
    { 
      question: t('homeService5Question'), 
      answer: t('homeService5Answer'),
    },
  ];

  return (
    <div className="service-include">
      <h3>{t('serviceIncludeHeading')}</h3>
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
