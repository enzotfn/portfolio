import { education, experience } from '../data/portfolio-data';
import ArtEngraving from './ArtEngraving';
import './Resume.css';

export default function Resume() {
  return (
    <section className="resume workstation-scene" id="resume" aria-label="Parcours et Expériences">
      <div className="scene-inner">
        <div className="slate-header">
          <div className="slate-header-left">
            <span className="slate-code">02 // PARCOURS</span>
            <h2 className="slate-title">
              Trajectoire &amp; <span className="italic-amber">Expériences</span>
            </h2>
          </div>
          <span className="slate-meta">Catalogue Chronologique &middot; 2019 — 2027</span>
        </div>

        <div className="resume-art-banner">
          <ArtEngraving variant="architecture" height={115} />
        </div>

        <div className="catalogue-section">
          <div className="catalogue-section-head">
            <span className="cat-roman">I.</span>
            <h3 className="cat-heading">Expériences &amp; Production Terrain</h3>
          </div>

          <div className="catalogue-table">
            {experience.map((item) => (
              <article key={item.id} className="catalogue-row" data-hover>
                <div className="cat-col-meta">
                  <span className="cat-year">{item.period}</span>
                  <span className="cat-loc">{item.location}</span>
                </div>

                <div className="cat-col-title">
                  <h4 className="cat-role">{item.role}</h4>
                  <span className="cat-company">{item.company}</span>
                </div>

                <div className="cat-col-desc">
                  <p className="cat-prose">{item.description}</p>
                  <div className="cat-tags">
                    {item.stack?.map((tag, i) => (
                      <span key={i} className="cat-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="catalogue-section">
          <div className="catalogue-section-head">
            <span className="cat-roman">II.</span>
            <h3 className="cat-heading">Formation Académique</h3>
          </div>

          <div className="catalogue-table">
            {education.map((edu) => (
              <article key={edu.id} className="catalogue-row" data-hover>
                <div className="cat-col-meta">
                  <span className="cat-year">{edu.period}</span>
                  <span className="cat-loc">{edu.location}</span>
                </div>

                <div className="cat-col-title">
                  <h4 className="cat-role">{edu.institution}</h4>
                  <span className="cat-company">{edu.focus}</span>
                </div>

                <div className="cat-col-desc">
                  <p className="cat-prose">{edu.description}</p>
                  <div className="cat-tags">
                    {edu.highlights?.map((tag, i) => (
                      <span key={i} className="cat-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
