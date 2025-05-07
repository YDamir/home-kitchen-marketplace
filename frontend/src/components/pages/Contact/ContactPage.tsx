import React from 'react';
import ContactIntroSection from '../../../components/ui/ContactIntroSection';
import ContactDetailsSection from '../../../components/ui/ContactDetailsSection';
import ContactFormSection from '../../../components/ui/ContactFormSection';
import SupportSection from '../../../components/ui/SupportSection';

const ContactPage: React.FC = () => {
  return (
    <>
      <ContactIntroSection />
      <ContactDetailsSection />
      <ContactFormSection />
      <SupportSection />
    </>
  );
};

export default ContactPage;
