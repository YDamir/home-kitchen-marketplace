// src/components/pages/HowItWorks/ForChefsSection/ForChefsSection.tsx
import React from 'react';
import styles from './ForChefsSection.module.css';

const ForChefsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Для поваров</h2>
        <ul className={styles.steps}>
          <li className={styles.step}>
            <strong>1.</strong> Зарегистрируйтесь и создайте профиль с описанием своих блюд.
          </li>
          <li className={styles.step}>
            <strong>2.</strong> Установите стоимость, укажите время приготовления и зону доставки.
          </li>
          <li className={styles.step}>
            <strong>3.</strong> Получайте заказы, готовьте с любовью и передавайте еду курьеру.
          </li>
          <li className={styles.step}>
            <strong>4.</strong> Получайте оплату и отзывы от довольных клиентов.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ForChefsSection;
