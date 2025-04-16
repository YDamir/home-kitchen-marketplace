import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/ui/HeroSection';
import Statistics from './components/ui/Statistics';
import PackagePlans from './components/ui/PackagePlans';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Statistics />
      <PackagePlans />
      <Footer />
    </>
  );
};

export default App;