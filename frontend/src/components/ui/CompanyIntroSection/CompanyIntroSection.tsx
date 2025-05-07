import React from 'react';
import styles from './CompanyIntroSection.module.css';

const CompanyIntroSection: React.FC = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <h2 className={styles.title}>О нашей платформе</h2>
        <p className={styles.text}>
          Мы создали маркетплейс домашних кухонь, чтобы соединить талантливых поваров с людьми,
          которые ценят настоящую домашнюю еду. Наша миссия — дать возможность каждому почувствовать тепло и вкус домашнего обеда,
          независимо от занятости и графика.
        </p>
        <p className={styles.text}>
          За каждым блюдом на нашей платформе стоит человек — повар с историей, традициями и любовью к кулинарии.
          Мы верим, что еда способна объединять, вдохновлять и дарить заботу.
        </p>
      </div>
    </section>
  );
};

export default CompanyIntroSection;
