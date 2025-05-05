import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', { name, email, message });
    alert('Спасибо за обращение!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>Связаться с нами</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Ваше сообщение"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Отправить сообщение</button>
      </form>
    </section>
  );
};

export default ContactForm;
