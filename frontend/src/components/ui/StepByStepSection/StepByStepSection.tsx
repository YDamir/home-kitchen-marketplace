// src/components/pages/HowItWorks/StepByStepSection/StepByStepSection.tsx
import React from 'react';
import styles from './StepByStepSection.module.css';

const StepByStepSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Как это работает: пошагово</h2>
        <ol className={styles.steps}>
          <li className={styles.step}>
            <h3>1. Найдите блюдо</h3>
            <p>Просмотрите каталог и выберите блюдо, которое хотите заказать. Используйте фильтры по повару, категории, ингредиентам и др.</p>
          </li>
          <li className={styles.step}>
            <h3>2. Оформите заказ</h3>
            <p>Укажите желаемое время доставки, адрес и способ оплаты. Подтвердите заказ.</p>
          </li>
          <li className={styles.step}>
            <h3>3. Повара готовят</h3>
            <p>Выбранный повар получит ваш заказ, приготовит блюдо и передаст его курьеру или сам доставит.</p>
          </li>
          <li className={styles.step}>
            <h3>4. Наслаждайтесь едой</h3>
            <p>Получите горячее домашнее блюдо и оцените повара. Повара будут рады вашим отзывам!</p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default StepByStepSection;
