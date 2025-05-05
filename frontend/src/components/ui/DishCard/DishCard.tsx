import React from 'react';
import styles from './DishCard.module.css';

export interface Dish {
  id: string;
  name: string;
  image: string;
  price: number;
  chef: string;
  rating: number;
  description?: string;
  cuisine?: string;
  category?: string;
  diet?: string;
  deliveryTime?: number;
}


const DishCard: React.FC<{ dish: Dish }> = ({ dish }) => {
  return (
    <div className={styles.card}>
      <img src={dish.image} alt={dish.name} className={styles.image} />
      <h3 className={styles.title}>{dish.name}</h3>
      {dish.description && <p className={styles.description}>{dish.description}</p>}
      <p className={styles.price}>{dish.price} ₽</p>
      <p className={styles.chef}>Повар: {dish.chef}</p>
      <div className={styles.rating}>
        {'★'.repeat(dish.rating)}
        {'☆'.repeat(5 - dish.rating)}
      </div>
      <div className={styles.actions}>
        <button className={styles.orderBtn}>Заказать</button>
        <button className={styles.detailsBtn}>Подробнее</button>
      </div>
    </div>
  );
};

export default DishCard;
