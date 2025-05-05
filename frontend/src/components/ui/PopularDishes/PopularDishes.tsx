import React from 'react';
import styles from './PopularDishes.module.css';
import DishCard, { Dish } from '../DishCard/DishCard';

const popularDishes: Dish[] = [
  {
    id: '1',
    name: 'Борщ со сметаной',
    image: '/images/borsch.png',
    price: 350,
    chef: 'Ирина Куликова',
    rating: 5,
    description: 'Классический борщ с говядиной и сметаной',
  },
  {
    id: '2',
    name: 'Плов по-узбекски',
    image: '/images/plov.png',
    price: 420,
    chef: 'Азамат Рахматов',
    rating: 4,
    description: 'Настоящий плов с бараниной и морковью',
  },
  {
    id: '3',
    name: 'Вареники с вишней',
    image: '/images/varenniks.png',
    price: 300,
    chef: 'Ольга Петренко',
    rating: 4,
    description: 'Домашние вареники ручной лепки с вишней',
  },
];

const PopularDishes: React.FC = () => {
  return (
    <section className={styles.popularDishes}>
      <h2 className={styles.heading}>Популярные блюда</h2>
      <div className={styles.dishGrid}>
        {popularDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  );
};

export default PopularDishes;
