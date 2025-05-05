import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.infoBlock}>
          <p className={styles.title}>Контакты</p>
          <p>Телефон: +7 (999) 123-45-67</p>
          <p>Email: info@homekitchen.ru</p>
          <p>Адрес: г. Москва, ул. Вкусная, д. 10</p>
        </div>

        <div className={styles.linksBlock}>
          <p className={styles.title}>Дополнительно</p>
          <nav className={styles.footerNav}>
            <a href="#" className={styles.navLink}>Политика конфиденциальности</a>
            <a href="#" className={styles.navLink}>Условия использования</a>
            <a href="#" className={styles.navLink}>Связаться с нами</a>
          </nav>
        </div>

        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon}>
            <img src="/images/VK Logo.png" alt="VK" />
          </a>
          <a href="#" className={styles.socialIcon}>
            <img src="/images/mail_icon_130883.png" alt="Mailru" />
          </a>
          <a href="#" className={styles.socialIcon}>
            <img src="/images/telegram.png" alt="Telegram" />
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          &copy; 2024 Home Kitchen Marketplace. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
