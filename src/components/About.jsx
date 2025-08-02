import React from "react";
import "../styles/About.css";

const About = () => {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Git", level: 85 },
    { name: "Адаптивная верстка", level: 90 },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Что я делаю</h2>
            <p>
              Создаю современные, быстрые и удобные веб-интерфейсы. Уделяю
              внимание деталям, семантике и доступности.
            </p>
            <p>
              Постоянно изучаю новые технологии и улучшаю свои навыки. В работе
              ценю чистый код, модульность и продуманную архитектуру.
            </p>
          </div>
          <div className="skills-section">
            <h3 className="skills-title">Мои навыки</h3>
            <div className="skills">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
