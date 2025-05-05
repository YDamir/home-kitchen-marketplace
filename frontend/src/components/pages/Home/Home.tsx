// src/components/pages/Home/Home.tsx
import React from 'react';
import styles from './Home.module.css';
import HeroSection from '../../ui/HeroSection';
import HowItWorks from '../../ui/HowItWorks';
import PopularDishes from '../../ui/PopularDishes';
import TopChefs from '../../ui/TopChefs';
import PlatformBenefits from '../../ui/PlatformBenefits';
import Testimonials from '../../ui/Testimonials';
import ContactForm from '../../ui/ContactForm';

const HomePage: React.FC = () => {
  return (
    <div className={styles.home}>
      <HeroSection />
      <HowItWorks />
      <PopularDishes />
      <TopChefs />
      <PlatformBenefits />
      <Testimonials />
      <ContactForm />
    </div>
  );
};


export default HomePage;