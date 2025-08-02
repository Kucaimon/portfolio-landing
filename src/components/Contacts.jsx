import React from "react";
import { FaTelegram, FaStar, FaPaperPlane } from "react-icons/fa";
import "../styles/Contacts.css";

const Contacts = () => {
  return (
    <section id="contacts" className="contacts-section">
      {/* 1. Заголовок */}
      <h2 className="title">Свяжитесь со мной</h2>

      {/* 2. Форма */}
      <form
        className="form"
        action="https://formspree.io/f/mdkddrvr"
        method="POST"
      >
        <input type="text" name="name" placeholder="Ваше имя" required />
        <input type="email" name="email" placeholder="Ваш email" required />
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          required
          rows="5"
        ></textarea>
        <button type="submit" className="submit-btn">
          Отправить сообщение
        </button>
      </form>

      {/* 3. Контакты */}
      <div className="other-contacts">
        <h3>Другие способы связи</h3>
        <div className="contact-links">
          <a
            href="https://t.me/front_kucaimon"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <FaTelegram className="icon" />
            Telegram
          </a>
          <a
            href="https://kwork.ru/user/gosha19982306"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <FaStar className="icon" />
            Kwork
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
