// src/components/layout/Header/Header.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Импортируем Link
import styles from './Header.module.css';

const Header: React.FC = () => {
  const location = useLocation();

  // Функция для проверки активности ссылки
  const isActive = (path: string): string => {
    return location.pathname === path ? styles.active : '';
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип теперь является ссылкой на главную страницу */}
        <Link to="/" className={styles.logo}>
          Маркетплейс <span>Домашних Кухонь</span>
        </Link>

        <nav className={styles.nav}>
          <Link to="/" className={isActive('/')}>Главная</Link>
          <Link to="/menu" className={isActive('/menu')}>Каталог блюд</Link>
          <Link to="/chefs" className={isActive('/chefs')}>Повара</Link>
          <Link to="/how-it-works" className={isActive('/how-it-works')}>Как это работает</Link>
          <Link to="/about" className={isActive('/about')}>О нас</Link>
          <Link to="/contact" className={isActive('/contact')}>Контакты</Link>
        </nav>

        <button className={styles.loginBtn}>Войти</button>
      </div>
    </header>
  );
};

export default Header;