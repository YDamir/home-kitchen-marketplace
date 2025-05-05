import React from 'react';
import styles from './PlatformBenefits.module.css';

const clientBenefits = [
  'Домашняя еда высокого качества',
  'Индивидуальный подход',
  'Удобная доставка',
];

const chefBenefits = [
  'Возможность монетизировать свои навыки',
  'Простой интерфейс для управления заказами',
  'Реклама и продвижение через платформу',
];

const PlatformBenefits: React.FC = () => {
  return (
    <section className={styles.benefitsSection}>
      <h2 className={styles.heading}>Преимущества платформы</h2>
      <div className={styles.benefitGrid}>
        <div className={styles.benefitCard}>
          <h3 className={styles.subheading}>Для клиентов</h3>
          <ul className={styles.benefitList}>
            {clientBenefits.map((benefit, index) => (
              <li key={index} className={styles.benefitItem}>✓ {benefit}</li>
            ))}
          </ul>
        </div>
        <div className={styles.benefitCard}>
          <h3 className={styles.subheading}>Для поваров</h3>
          <ul className={styles.benefitList}>
            {chefBenefits.map((benefit, index) => (
              <li key={index} className={styles.benefitItem}>✓ {benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PlatformBenefits;
