import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to Home Kitchen Marketplace</h1>
      <p>Order delicious homemade meals from local chefs!</p>
    </div>
  );
};

export default Home;