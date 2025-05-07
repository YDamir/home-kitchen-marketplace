// src/components/pages/HowItWorks/HowItWorks.tsx
import React from 'react';
import IntroSection from '../../../components/ui/IntroSection';
import ForCustomersSection from '../../../components/ui/ForCustomersSection';
import ForChefsSection from '../../../components/ui/ForChefsSection';
import StepByStepSection from '../../../components/ui/StepByStepSection';
import FAQSection from '../../../components/ui/FAQSection';
import CallToActionSection from '../../../components/ui/CallToActionSection';

const HowItWorksPage: React.FC = () => {
  return (
    <>
      <IntroSection />
      <ForCustomersSection />
      <ForChefsSection />
      <StepByStepSection />
      <FAQSection />
      <CallToActionSection />
    </>
  );
};

export default HowItWorksPage;
