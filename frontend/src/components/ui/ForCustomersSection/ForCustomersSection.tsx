// src/components/pages/HowItWorks/ForCustomersSection/ForCustomersSection.tsx
import React from 'react';
import styles from './ForCustomersSection.module.css';

const ForCustomersSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Для заказчиков</h2>
        <ul className={styles.steps}>
          <li className={styles.step}>
            <strong>1.</strong> Выберите блюда из каталога по своим предпочтениям.
          </li>
          <li className={styles.step}>
            <strong>2.</strong> Ознакомьтесь с информацией о поваре, его рейтингом и отзывами.
          </li>
          <li className={styles.step}>
            <strong>3.</strong> Укажите адрес доставки и выберите удобное время.
          </li>
          <li className={styles.step}>
            <strong>4.</strong> Оплатите заказ онлайн и ждите вкусную еду прямо к двери!
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ForCustomersSection;
