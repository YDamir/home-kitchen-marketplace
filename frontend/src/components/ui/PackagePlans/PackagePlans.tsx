import React from 'react';
import styles from './PackagePlans.module.css';

const plans = [
  { title: 'Starter Plan', price: '$9.99/week', description: 'Ideal for light eaters' },
  { title: 'Family Plan', price: '$19.99/week', description: 'Perfect for families', highlighted: true },
  { title: 'Gourmet Plan', price: '$29.99/week', description: 'For fine dining lovers' },
];

const PackagePlans: React.FC = () => {
  return (
    <section className={styles.packagePlans}>
      <h2>Meal Plans</h2>
      <p>Choose the perfect plan that fits your lifestyle and taste buds!</p>
      <div className={styles.planCards}>
        {plans.map((plan, index) => (
          <div key={index} className={`${styles.planCard} ${plan.highlighted ? styles.highlighted : ''}`}>
            <h3>{plan.title}</h3>
            <p>{plan.price}</p>
            <span>{plan.description}</span>
            <div className={styles.cardActions}>
              <button className={styles.btnEdit}>Edit</button>
              <button className={styles.btnDelete}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.addPlan}>
        <button className={styles.btnAdd}>Add Plan</button>
      </div>
    </section>
  );
};

export default PackagePlans;