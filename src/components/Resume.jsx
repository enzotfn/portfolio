import { useEffect, useRef } from 'react';
import { education, experience } from '../data/portfolio-data';
import './Resume.css';

export default function Resume() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
            entry.target.querySelectorAll('.timeline-entry').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150 + 200);
            });
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="resume section" id="resume" ref={sectionRef} aria-label="Resume">
      <div className="resume-container">
        <div className="resume-header reveal">
          <span className="section-label">02 — Resume</span>
          <h2 className="section-title">
            My <span className="highlight">Journey</span>
          </h2>
        </div>

        <div className="resume-grid">
          {/* Education */}
          <div className="timeline-block">
            <div className="timeline-block-header">
              <div className="block-icon">🎓</div>
              <h3 className="block-title">Education</h3>
              <div className="block-badge">Scene II</div>
            </div>

            <div className="timeline">
              {education.map((item, index) => (
                <article
                  key={index}
                  className="timeline-entry"
                  id={`edu-${index}`}
                >
                  <div className="timeline-dot" aria-hidden="true">
                    <span className="dot-inner" />
                  </div>
                  <div className="timeline-content glass-card">
                    <span className="timeline-period">{item.period}</span>
                    <h4 className="timeline-title">{item.institution}</h4>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="timeline-block">
            <div className="timeline-block-header">
              <div className="block-icon">💼</div>
              <h3 className="block-title">Experience</h3>
              <div className="block-badge">Scene III</div>
            </div>

            <div className="timeline">
              {experience.map((item, index) => (
                <article
                  key={index}
                  className="timeline-entry"
                  id={`exp-${index}`}
                >
                  <div className="timeline-dot" aria-hidden="true">
                    <span className="dot-inner" />
                  </div>
                  <div className="timeline-content glass-card">
                    <span className="timeline-period">{item.period}</span>
                    <h4 className="timeline-title">{item.role}</h4>
                    <p className="timeline-company">{item.company}</p>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
