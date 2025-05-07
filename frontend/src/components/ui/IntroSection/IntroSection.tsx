import React from 'react';
import styles from './IntroSection.module.css';

const IntroSection: React.FC = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <h1 className={styles.title}>Как работает Маркетплейс Домашних Кухонь</h1>
        <p className={styles.subtitle}>
          Мы объединяем домашних поваров с теми, кто ценит вкусную и уютную еду. Легко заказывайте, наслаждайтесь — как дома, только лучше.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
