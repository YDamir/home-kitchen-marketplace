import React, { useState } from 'react';
import styles from './ContactFormSection.module.css';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь может быть логика отправки формы
    console.log('Форма отправлена:', formData);
    alert('Спасибо за ваше сообщение!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Связаться с нами</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
