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
      question: t('service1Question'), 
      answer: t('service1Answer'),
    },
    { 
      question: t('service2Question'), 
      answer: t('service2Answer'),
    },
    { 
      question: t('service3Question'), 
      answer: t('service3Answer'),
    },
    { 
      question: t('service4Question'), 
      answer: t('service4Answer'),
    },
    { 
      question: t('service5Question'), 
      answer: t('service5Answer'),
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
