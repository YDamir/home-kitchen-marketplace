import React from 'react';
import styles from './ValuesSection.module.css';

const values = [
  {
    title: 'Честность и прозрачность',
    description: 'Мы честны с нашими поварами и клиентами. Мы строим доверие через открытость, прозрачные условия и справедливое сотрудничество.',
  },
  {
    title: 'Качество и забота',
    description: 'Каждое блюдо готовится с душой. Мы выбираем тех, кто действительно увлечён своим делом и ставит качество выше всего.',
  },
  {
    title: 'Поддержка локального',
    description: 'Мы верим в силу местных сообществ. Наша платформа помогает поварам реализовать себя, не покидая родной кухни.',
  },
  {
    title: 'Культурное разнообразие',
    description: 'Еда — это способ рассказать о себе. Мы поддерживаем мультикультурность и даём поварам возможность делиться своей историей через блюда.',
  },
];

const ValuesSection: React.FC = () => {
  return (
    <section className={styles.values}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши ценности</h2>
        <div className={styles.grid}>
          {values.map((value, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
