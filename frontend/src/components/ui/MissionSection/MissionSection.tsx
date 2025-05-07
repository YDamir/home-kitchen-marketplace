import React from 'react';
import styles from './MissionSection.module.css';

const MissionSection: React.FC = () => {
  return (
    <section className={styles.mission}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наша миссия</h2>
        <p className={styles.text}>
          Мы стремимся создать сообщество, в котором каждый повар может раскрыть свой талант и поделиться частичкой своей культуры,
          а каждый клиент — получить вкусную, полезную и честную еду, приготовленную с душой.
        </p>
        <p className={styles.text}>
          Поддерживая локальных поваров, мы способствуем развитию микро-бизнесов, культурному обмену и устойчивому образу жизни.
          Вместе мы меняем представление о доставке еды и создаём будущее, в котором еда снова становится личной.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
