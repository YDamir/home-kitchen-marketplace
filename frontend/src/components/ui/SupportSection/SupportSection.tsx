import React from 'react';
import styles from './SupportSection.module.css';

const SupportSection: React.FC = () => {
  return (
    <section className={styles.supportSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Нужна помощь?</h2>
        <p className={styles.description}>
          Если у вас возникли вопросы или проблемы с заказом, наша служба поддержки всегда готова помочь.
        </p>

        <div className={styles.options}>
          <div className={styles.option}>
            <h3>Часто задаваемые вопросы</h3>
            <p>Посетите наш <a href="/faq">раздел FAQ</a> для быстрого ответа на распространённые вопросы.</p>
          </div>
          <div className={styles.option}>
            <h3>Связь с поддержкой</h3>
            <p>Напишите нам по адресу <a href="mailto:support@homekitchen.com">support@homekitchen.com</a> или позвоните по номеру <strong>+7 (800) 123-45-67</strong>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
