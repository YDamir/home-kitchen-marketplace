import React, { useState } from 'react';
import styles from './Testimonials.module.css';

type Testimonial = {
  id: number;
  name: string;
  photo: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Анна Смирнова',
    photo: '/images/client1.png',
    quote: 'Это просто находка! Вкусно, удобно, и прямо от души!',
  },
  {
    id: 2,
    name: 'Евгений Лебедев',
    photo: '/images/client2.png',
    quote: 'Суперсервис! Никогда не думал, что домашняя еда может быть настолько вкусной и доступной.',
  },
  {
    id: 3,
    name: 'Мария Иванова',
    photo: '/images/client3.png',
    quote: 'Приятно удивлена — доставка вовремя, вкус как у бабушки!',
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  const { name, photo, quote } = testimonials[current];

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.heading}>Отзывы клиентов</h2>
      <div className={styles.card}>
        <img src={photo} alt={name} className={styles.avatar} />
        <blockquote className={styles.quote}>"{quote}"</blockquote>
        <p className={styles.name}>— {name}</p>
        <div className={styles.controls}>
          <button onClick={prev}>&larr;</button>
          <button onClick={next}>&rarr;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
