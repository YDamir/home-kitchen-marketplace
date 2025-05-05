import React from 'react';
import styles from './ChefCard.module.css';

export interface Chef {
  id: number;
  name: string;
  cuisine: string;
  experience: number;
  avatarUrl: string;
  specialty: string; // кухня, например "Итальянская"
  rating: number;
  avgPrice: number;
  avgDeliveryTime: number;
  description: string;
}

interface Props {
  chef: Chef;
}

const ChefCard: React.FC<Props> = ({ chef }) => {
  return (
    <div className={styles.card}>
      <img src={chef.avatarUrl} alt={chef.name} className={styles.avatar} />

      <div className={styles.info}>
        <h3 className={styles.name}>{chef.name}</h3>
        <p className={styles.specialty}>{chef.specialty} кухня</p>
        <p className={styles.description}>{chef.description}</p>

        <div className={styles.stats}>
          <span>⭐ {chef.rating.toFixed(1)}</span>
          <span>💲 {chef.avgPrice} ₽</span>
          <span>⏱ {chef.avgDeliveryTime} мин</span>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
