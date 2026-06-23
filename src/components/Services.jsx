import { useEffect, useRef } from 'react';
import { services } from '../data/portfolio-data';
import './Services.css';

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.service-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 200);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <section className="services" ref={sectionRef} aria-label="Services">
      <div className="services-container">
        <div className="services-header reveal">
          <h3 className="services-title">What I&apos;m Doing</h3>
          <div className="services-subtitle">
            <span className="scene-badge">Scene I</span>
            <span>Expertise & Craft</span>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={index}
              className="service-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              data-hover
              id={`service-${index}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h4 className="service-name">{service.title}</h4>
              <p className="service-desc">{service.description}</p>
              <div className="service-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
