import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Мое портфолио</p>
        <p>Разработано с ❤️ и React</p>
      </div>
    </footer>
  );
};

export default Footer;
