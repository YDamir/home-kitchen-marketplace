import React from 'react';
import styles from './TopChefs.module.css';

type Chef = {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
};

const chefs: Chef[] = [
  {
    id: '1',
    name: 'Ирина Куликова',
    image: '/images/chef1.png',
    description: 'Специалист по русской и восточной кухне. Более 10 лет опыта.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Азамат Рахматов',
    image: '/images/chef2.png',
    description: 'Профессиональный повар узбекской кухни. Настоящий мастер плова.',
    rating: 4,
  },
  {
    id: '3',
    name: 'Ольга Петренко',
    image: '/images/chef3.png',
    description: 'Домашняя выпечка, вареники и десерты. Готовит с душой!',
    rating: 4,
  },
];

const TopChefs: React.FC = () => {
  return (
    <section className={styles.popularDishes}>
      <h2 className={styles.heading}>Наши повара</h2>
      <div className={styles.dishGrid}>
        {chefs.map((chef) => (
          <div key={chef.id} className={styles.card}>
            <img src={chef.image} alt={chef.name} className={styles.image} />
            <h3 className={styles.title}>{chef.name}</h3>
            <p className={styles.chef}>{chef.description}</p>
            <div className={styles.rating}>
              {'★'.repeat(chef.rating)}
              {'☆'.repeat(5 - chef.rating)}
            </div>
            <div className={styles.actions}>
              <button className={styles.orderBtn}>Посмотреть меню</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopChefs;
