import React from 'react';
import styles from './TeamSection.module.css';

const teamMembers = [
  {
    name: 'Давлетбаев Дамир',
    role: 'Сооснователь и CEO / Технический директор (CTO) / Куратор поваров / Продакт-менеджер',
    photo: 'images/damir.png',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наша команда</h2>
        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.card}>
              <img src={member.photo} alt={member.name} className={styles.photo} />
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
