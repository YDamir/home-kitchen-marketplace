import React from 'react';
import styles from './Statistics.module.css';
import { stats } from '../../../data/stats.ts'; // Импортируем данные

const Statistics: React.FC = () => {
  return (
    <section className={styles.statistics}>
      <div className={styles.container}>
        {stats.map((stat) => (
          <div className={styles.statItem} key={stat.alt}>
            <img src={stat.icon} alt={stat.alt} className={styles.statIcon} />
            <div>
              <span className={styles.statNumber}>{stat.number}</span>
              <p className={styles.statDescription}>{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;