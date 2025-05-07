// src/components/pages/HowItWorks/FAQSection/FAQSection.tsx
import React from 'react';
import styles from './FAQSection.module.css';

const faqs = [
  {
    question: 'Кто готовит еду?',
    answer: 'Блюда готовят проверенные домашние повара, прошедшие регистрацию и модерацию на платформе.',
  },
  {
    question: 'Насколько безопасна еда?',
    answer: 'Все повара соблюдают санитарные нормы и проходят проверку качества. Вы можете ознакомиться с отзывами других клиентов.',
  },
  {
    question: 'Как осуществляется доставка?',
    answer: 'Доставку может выполнить как сам повар, так и курьерская служба. Это указывается при оформлении заказа.',
  },
  {
    question: 'Можно ли отменить заказ?',
    answer: 'Да, вы можете отменить заказ до начала приготовления. Условия отмены указаны при оформлении.',
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Часто задаваемые вопросы</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3 className={styles.question}>{faq.question}</h3>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
