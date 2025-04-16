import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>
            Delicious Meals Delivered<br />
            <span className={styles.highlight}>The Easy Way</span>
          </h2>
          <p>
            Enjoy fresh, tasty dishes brought straight to your door. Convenient,
            fast, and always satisfying — your favorite meals are just a click away!
          </p>
          <div className={styles.buttons}>
            <button className={styles.btnPrimary}>Order Now</button>
            <button className={styles.btnSecondary}>Explore Menu</button>
          </div>
        </div>
        <img src="/images/hero.png" alt="Hero Image" className={styles.image} />
      </div>
    </section>
  );
};

export default HeroSection;