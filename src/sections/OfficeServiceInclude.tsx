import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/_serviceInclude.scss';
import { useTranslation } from 'react-i18next';

const OfficeServiceInclude: React.FC = () => {
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
      question: t('officeService1Question'), 
      answer: t('officeService1Answer'),
    },
    { 
      question: t('officeService2Question'), 
      answer: t('officeService2Answer'),
    },
    { 
      question: t('officeService3Question'), 
      answer: t('officeService3Answer'),
    },
    { 
      question: t('officeService4Question'), 
      answer: t('officeService4Answer'),
    },
    { 
      question: t('officeService5Question'), 
      answer: t('officeService5Answer'),
    },
    { 
      question: t('officeService6Question'), 
      answer: t('officeService6Answer'),
    },
    { 
      question: t('officeService7Question'), 
      answer: t('officeService7Answer'),
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

export default OfficeServiceInclude;
