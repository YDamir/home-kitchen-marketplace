import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>YumaNow<span>+</span></h1>
        <nav className={styles.nav}>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">About Us</a>
          <a href="#">Orders</a>
          <a href="#">Blogs</a>
          <a href="#">Contact Us</a>
        </nav>
        <button className={styles.loginBtn}>Login</button>
      </div>
    </header>
  );
};

export default Header;