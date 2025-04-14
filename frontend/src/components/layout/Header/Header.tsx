import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Home Kitchen Marketplace
      </div>
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/profile">Profile</a>
      </nav>
    </header>
  );
};

export default Header;