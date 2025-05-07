// src/Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home/Home';
import Menu from './components/pages/Menu/Menu';
import Chefs from './components/pages/Chefs/Chefs';
import HowItWorks from './components/pages/HowItWorks/HowItWorks';
import AboutPage from './components/pages/AboutUs/AboutUs';
import ContactPage from './components/pages/Contact/ContactPage';
import PlaceholderPage from './components/pages/PlaceHolderPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
