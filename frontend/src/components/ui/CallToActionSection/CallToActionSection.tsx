// src/components/pages/HowItWorks/CallToActionSection/CallToActionSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CallToActionSection.module.css';

const CallToActionSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Готовы попробовать?</h2>
        <p className={styles.subheading}>
          Присоединяйтесь к нашему сообществу — сделайте заказ у домашнего повара или начните готовить сами!
        </p>
        <div className={styles.actions}>
          <Link to="/menu" className={styles.buttonPrimary}>Посмотреть блюда</Link>
          <Link to="/chefs" className={styles.buttonSecondary}>Стать поваром</Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
