import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-wrapper">
          <img src={logo} alt="Логотип разработчика" className="logo-image" />
        </div>

        {isMobile ? (
          <>
            <button
              className={`burger-btn ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Меню"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
              <nav className="nav-mobile">
                <a href="#hero" onClick={closeMenu}>
                  Главная
                </a>
                <a href="#about" onClick={closeMenu}>
                  Обо мне
                </a>
                <a href="#portfolio" onClick={closeMenu}>
                  Портфолио
                </a>
                <a href="#contacts" onClick={closeMenu}>
                  Контакты
                </a>
              </nav>
            </div>
          </>
        ) : (
          <nav className="nav-desktop">
            <a href="#hero">Главная</a>
            <a href="#about">Обо мне</a>
            <a href="#portfolio">Портфолио</a>
            <a href="#contacts">Контакты</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
