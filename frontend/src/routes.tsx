import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Импортируем все страницы
import Home from './components/pages/Home/Home';
import Menu from './components/pages/Menu/Menu';
import Chefs from './components/pages/Chefs/Chefs'; // Импортируем страницу с поварами
// import HowItWorks from './components/pages/HowItWorks/HowItWorks';
// import About from './components/pages/About/About';
// import Contact from './components/pages/Contact/Contact';
// import NotFound from './components/pages/NotFound/NotFound';
// Временные страницы
import PlaceholderPage from './components/pages/PlaceHolderPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Реализованные маршруты */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chefs" element={<Chefs />} />

          {/* Временные маршруты */}
          <Route path="/how-it-works" element={<PlaceholderPage title="How It Works" />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />

          {/* Страница 404 */}
          <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
