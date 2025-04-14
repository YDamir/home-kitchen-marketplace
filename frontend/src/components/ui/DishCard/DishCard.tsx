import React from 'react';
import styles from './DishCard.module.css';

type DishCardProps = {
  name: string;
  price: number;
  imageUrl: string;
};

const DishCard: React.FC<DishCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default DishCard;