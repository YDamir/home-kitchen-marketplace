import React from 'react';

interface Plan {
  name: string;
  price: string;
  description: string;
}

interface PlansProps {
  plans: Plan[];
}

const Plans: React.FC<PlansProps> = ({ plans }) => {
  return (
    <section className="package-plans">
      <h2>Meal Plans</h2>
      <p>Choose the perfect plan that fits your lifestyle and taste buds!</p>
      <div className="plan-cards">
        {plans.map(plan => (
          <div className="plan-card" key={plan.name}>
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <span>{plan.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
