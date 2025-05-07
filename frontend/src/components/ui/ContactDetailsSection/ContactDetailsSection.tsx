import React from 'react';
import styles from './ContactDetailsSection.module.css';

const ContactDetailsSection: React.FC = () => {
  return (
    <section className={styles.details}>
      <div className={styles.container}>
        <h2 className={styles.title}>Контактная информация</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <h3>Адрес</h3>
            <p>г. Москва, ул. Примерная, д. 12</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Телефон</h3>
            <p>+7 (495) 123-45-67</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Email</h3>
            <p>support@homekitchen.ru</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Часы работы</h3>
            <p>Пн–Пт: 9:00 – 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
