import React from 'react';
import CompanyIntroSection from '../../../components/ui/CompanyIntroSection';
import MissionSection from '../../../components/ui/MissionSection';
import ValuesSection from '../../ui/ValuesSection/ValuesSection';
import TeamSection from '../../../components/ui/TeamSection';

const AboutPage: React.FC = () => {
  return (
    <>
      <CompanyIntroSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
    </>
  );
};

export default AboutPage;
