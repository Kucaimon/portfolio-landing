import React, { useEffect } from "react";
import "../styles/Hero.css";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxBg = document.querySelector(".parallax-bg");
      if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrollY * 0.3}px)`; // Уменьшил коэффициент для плавности
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="parallax-bg"></div>
      <div className="hero-content">
        <h1>Привет, я фронтенд-разработчик</h1>
        <p>Создаю современные и адаптивные веб-приложения</p>
        <a href="#contacts" className="cta-button">
          Связаться
        </a>
      </div>
    </section>
  );
};

export default Hero;