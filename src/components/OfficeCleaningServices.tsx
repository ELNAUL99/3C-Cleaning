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
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');
  const [size, setSize] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_upoxqkx';
    const templateID = 'template_2pdl689';
    const publicKey = '26iXmGYSsDxD40Twl';

    const templateParams = {
      from_companyname: name,
      from_email: email,
      from_phonenumber: phonenumber,
      to_name: '3C Cleaning',
      from_address: address,
      from_postcode: postcode,
      from_size: size,
      from_message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        setFormStatus(t('formStatusSuccess'));
        setName('');
        setEmail('');
        setPhoneNumber('');
        setAddress('');
        setPostcode('');
        setSize('');
        setMessage('');
      }, (error) => {
        setFormStatus(t('formStatusError'));
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section className="movingServices">
      <div className="services-heading">
        <h2>{t('officeCleaningServicesHeading')}</h2>
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