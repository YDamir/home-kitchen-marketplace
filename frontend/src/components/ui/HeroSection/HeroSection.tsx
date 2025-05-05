import React, { useState } from 'react';
import styles from './HeroSection.module.css';
import Input from '../../common/Input';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Поиск по ингредиентам:', searchQuery);
    // Здесь будет логика поиска
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>
            Домашняя еда от лучших поваров<br />
            <span className={styles.highlight}>вашего города</span>
          </h2>
          <p>
            Безупречный вкус, свежесть и забота в каждом блюде
          </p>
          <div className={styles.buttons}>
            <button className={styles.btnPrimary}>Заказать еду</button>
            <button className={styles.btnSecondary}>Выбрать блюдо</button>
          </div>
          <div style={{ marginTop: '20px' }}>
            <Input
              type="text"
              placeholder="Найти блюдо по ингредиентам"
              value={searchQuery}
              onChange={setSearchQuery}
            />
            <button className={styles.btnPrimary} style={{ marginTop: '10px' }} onClick={handleSearch}>
              Найти
            </button>
          </div>
        </div>
        <img src="/images/hero.png" alt="Герой блок" className={styles.image} />
      </div>
    </section>
  );
};

export default HeroSection;
