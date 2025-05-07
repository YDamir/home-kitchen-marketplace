import React from 'react';
import styles from './ContactIntroSection.module.css';

const ContactIntroSection: React.FC = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <h1 className={styles.title}>Свяжитесь с нами</h1>
        <p className={styles.subtitle}>
          Мы всегда готовы ответить на ваши вопросы и помочь вам. Вы можете написать нам, позвонить или просто заполнить форму ниже.
        </p>
      </div>
    </section>
  );
};

export default ContactIntroSection;
