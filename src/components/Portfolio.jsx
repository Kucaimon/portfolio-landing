import React from "react";
import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import "../styles/Portfolio.css";

// Импортируем изображения (замените на свои)
import alageumPreview from "../assets/images/alageum-preview.jpg";
import womazingPreview from "../assets/images/womazing-preview.jpg";
import beautySalonPreview from "../assets/images/beauty-salon-preview.jpg";
import cleaningPreview from "../assets/images/cleaning-preview.jpg";

const projects = [
  {
    id: 1,
    title: "Alageum Logistic",
    description: "Сайт-презентация для транспортной компании",
    image: alageumPreview,
    link: "https://kucaimon.github.io/Alageum-logistic/",
    tags: ["HTML5", "CSS3", "JavaScript"],
    previewClass: "alageum-preview"
  },
  {
    id: 2,
    title: "Womazing Shop",
    description: "Демо-магазин женской одежды",
    image: womazingPreview,
    link: "https://kucaimon.github.io/womazing-shop-demo/",
    tags: ["HTML5", "CSS3", "JavaScript"],
    previewClass: "womazing-preview"
  },
  {
    id: 3,
    title: "Beauty Salon",
    description: "Сайт для салона красоты",
    image: beautySalonPreview,
    link: "https://kucaimon.github.io/beauty-salon/",
    tags: ["HTML5", "CSS3", "JavaScript"],
    previewClass: "beauty-salon-preview"
  },
  {
    id: 4,
    title: "CleaningX",
    description: "Сайт клининговой компании",
    image: cleaningPreview,
    link: "https://kucaimon.github.io/CleaningX-demo/",
    tags: ["HTML5", "CSS3", "JavaScript"],
    previewClass: "cleaning-preview"
  }
];

const Portfolio = () => {
  const parallaxBg = useParallax({
    speed: -15,
    disabled: typeof window === "undefined"
  });

  return (
    <section id="portfolio" className="portfolio-section">
      <div ref={parallaxBg.ref} className="parallax-bg" />
      
      <div className="portfolio-container">
        <motion.h2
          className="portfolio-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Мои работы
        </motion.h2>
        
        <div className="portfolio-gallery">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1 
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="portfolio-link"
              >
                <div className={`portfolio-image-wrapper ${project.previewClass}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                  />
                  <motion.div
                    className="portfolio-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="portfolio-tags">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ 
                            delay: 0.1 + i * 0.05,
                            type: "spring" 
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;