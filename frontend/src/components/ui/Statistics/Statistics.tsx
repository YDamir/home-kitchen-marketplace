import React from 'react';
import styles from './Statistics.module.css';

const stats = [
  { icon: '/images/icon-engagements.png', number: '50k+', description: 'Meals Delivered' },
  { icon: '/images/icon-clients.png', number: '10k+', description: 'Happy Customers' },
  { icon: '/images/icon-return-clients.png', number: '8k+', description: 'Repeat Orders' },
  { icon: '/images/icon-reviews.png', number: '5k+', description: 'Positive Reviews' },
];

const Statistics: React.FC = () => {
  return (
    <section className={styles.statistics}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <img src={stat.icon} alt={stat.description} className={styles.statIcon} />
            <div>
              <span className={styles.statNumber}>{stat.number}</span>
              <p>{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;