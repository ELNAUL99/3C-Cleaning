import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import OfficeServiceInclude from '../sections/OfficeServiceInclude';

const OfficeCleaningServices: React.FC = () => {

  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [apartmentType, setApartmentType] = useState('');
  const [floors, setFloors] = useState('');
  const [size, setSize] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_upoxqkx';
    const templateID = 'template_olasjef';
    const publicKey = '26iXmGYSsDxD40Twl';

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phonenumber: phonenumber,
      to_name: '3C Cleaning',
      from_apartmenttype: apartmentType,
      from_apartmentfloor: floors || '1',
      from_apartmentsize: size,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        setFormStatus(t('formStatusSuccess'));
        setName('');
        setEmail('');
        setPhoneNumber('');
        setApartmentType('');
        setFloors('');
        setSize('');
      }, (error) => {
        setFormStatus(t('formStatusError'));
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section className="movingServices">
      <div className="services-heading">
        <h2>{t('movingCleaningServices')}</h2>
      </div>
      <div className="content-layer">
        <div className="estimation-section">
          <div className="package regular">
            <p>{t('movingCleaning')}</p>
            <div className="package-note">
              <p>{t('packageNote2')}</p>
            </div>
          </div>
        </div>
        <OfficeServiceInclude />
      </div>
    </section>
  );
};

export default OfficeCleaningServices;