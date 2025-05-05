import React from 'react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    icon: '/images/icon-clients.png',
    alt: 'Шаг 1',
    title: 'Выберите блюдо из каталога',
  },
  {
    icon: '/images/icon-return-clients.png',
    alt: 'Шаг 2',
    title: 'Свяжитесь с поваром или оформите заказ',
  },
  {
    icon: '/images/icon-reviews.png',
    alt: 'Шаг 3',
    title: 'Получите блюдо с доставкой или самовывозом',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className={styles.statistics}>
      <div className={styles.container}>
        {steps.map((step, index) => (
          <div className={styles.statItem} key={index}>
            <img src={step.icon} alt={step.alt} className={styles.statIcon} />
            <div>
              <span className={styles.statNumber}>Шаг {index + 1}</span>
              <p className={styles.statDescription}>{step.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
