import React, { useState } from 'react';
import styles from './PackagePlans.module.css';

// Тип для плана
interface Plan {
  id: string; // Уникальный идентификатор для каждой карточки
  title: string;
  price: string;
  description: string;
  highlighted?: boolean; // Опциональное свойство
}

// Массив данных
const plans: Plan[] = [
  { id: '1', title: 'Starter Plan', price: '$9.99/week', description: 'Ideal for light eaters' },
  { id: '2', title: 'Family Plan', price: '$19.99/week', description: 'Perfect for families' },
  { id: '3', title: 'Gourmet Plan', price: '$29.99/week', description: 'For fine dining lovers' },
  { id: '4', title: 'Gourmet Plan', price: '$29.99/week', description: 'For fine dining lovers' },
  { id: '5', title: 'Gourmet Plan', price: '$29.99/week', description: 'For fine dining lovers' },
  { id: '6', title: 'Gourmet Plan', price: '$29.99/week', description: 'For fine dining lovers' },
  { id: '7', title: 'Gourmet Plan', price: '$29.99/week', description: 'For fine dining lovers' },
  { id: '8', title: 'Gourmet Plan', price: '$29.99/week', description: 'For fine dining lovers' },
];

const PackagePlans: React.FC = () => {
  // Состояние для отслеживания подсвеченных карточек
  const [highlightedIds, setHighlightedIds] = useState<string[]>([]);

  // Функция для переключения подсветки
  const toggleHighlight = (id: string) => {
    setHighlightedIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id) // Убираем ID из массива
        : [...prev, id] // Добавляем ID в массив
    );
  };

  return (
    <section className={styles.packagePlans}>
      {/* Заголовок секции */}
      <h2>Meal Plans</h2>
      {/* Описание секции */}
      <p>Choose the perfect plan that fits your lifestyle and taste buds!</p>
      {/* Контейнер для карточек */}
      <div className={styles.planCards}>
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`${styles.planCard} ${
              highlightedIds.includes(plan.id) ? styles.highlighted : ''
            }`}
            onClick={() => toggleHighlight(plan.id)} // Переключение подсветки при клике
          >
            {/* Название плана */}
            <h3>{plan.title}</h3>
            {/* Цена */}
            <p className={styles.price}>{plan.price}</p>
            {/* Описание */}
            <span className={styles.description}>{plan.description}</span>
            {/* Кнопки действий */}
            <div className={styles.cardActions}>
              <button className={styles.btnEdit}>Edit</button>
              <button className={styles.btnDelete}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {/* Кнопка добавления нового плана */}
      <div className={styles.addPlan}>
        <button className={styles.btnAdd}>Add Plan</button>
      </div>
    </section>
  );
};

export default PackagePlans;