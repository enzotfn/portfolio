import { useEffect, useRef, useState } from 'react';
import { technicalSkills, languages, competences } from '../data/portfolio-data';
import './Skills.css';

export default function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills section" id="skills" ref={sectionRef} aria-label="Skills">
      <div className="skills-container">
        <div className={`skills-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">03 — Skills</span>
          <h2 className="section-title">
            Control <span className="highlight">Panel</span>
          </h2>
          <p className="skills-intro">
            An AR-style overview of my technical arsenal and competences.
          </p>
        </div>

        <div className="skills-panels">
          {/* Technical Skills */}
          <div className={`skills-panel ${isVisible ? 'visible' : ''}`}>
            <div className="panel-header">
              <span className="panel-icon">⬡</span>
              <h3 className="panel-title">Technical Skills</h3>
              <span className="panel-badge">Scene IV</span>
            </div>

            <div className="skills-bars">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-bar-item"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="skill-bar-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100 + 300}ms`,
                      }}
                    />
                    <div
                      className="skill-bar-glow"
                      style={{
                        left: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100 + 300}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className={`skills-panel ${isVisible ? 'visible' : ''}`}>
            <div className="panel-header">
              <span className="panel-icon">◈</span>
              <h3 className="panel-title">Languages</h3>
            </div>

            <div className="lang-grid">
              {languages.map((lang, index) => (
                <div key={index} className="lang-card" id={`lang-${index}`}>
                  <div className="lang-circle">
                    <svg viewBox="0 0 100 100" className="lang-svg">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="lang-track"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="lang-fill"
                        style={{
                          strokeDasharray: `${2 * Math.PI * 42}`,
                          strokeDashoffset: isVisible
                            ? `${2 * Math.PI * 42 * (1 - lang.level / 100)}`
                            : `${2 * Math.PI * 42}`,
                          transitionDelay: `${index * 200 + 500}ms`,
                        }}
                      />
                    </svg>
                    <span className="lang-percent">{lang.level}%</span>
                  </div>
                  <h4 className="lang-name">{lang.name}</h4>
                  <span className="lang-detail">{lang.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Competences */}
          <div className={`skills-panel ${isVisible ? 'visible' : ''}`}>
            <div className="panel-header">
              <span className="panel-icon">✦</span>
              <h3 className="panel-title">Competences</h3>
            </div>

            <div className="comp-grid">
              {competences.map((comp, index) => (
                <div
                  key={index}
                  className="comp-tag"
                  style={{ animationDelay: `${index * 80}ms` }}
                  id={`comp-${index}`}
                >
                  <span className="comp-name">{comp.name}</span>
                  {comp.detail && (
                    <span className="comp-detail">{comp.detail}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
