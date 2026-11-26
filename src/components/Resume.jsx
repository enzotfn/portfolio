import { education, experience } from '../data/portfolio-data';
import './Resume.css';

export default function Resume() {
  return (
    <section className="resume workstation-scene" id="resume" aria-label="Parcours et Expériences">
      <div className="scene-inner">
        <div className="slate-header">
          <h2 className="slate-title">
            Trajectoire <span className="italic-amber">&amp; Expériences</span>
          </h2>
        </div>

        <div className="resume-two-col">
          {/* Colonne Expériences */}
          <div className="resume-column">
            <h3 className="resume-col-title">Expériences</h3>

            <div className="timeline-stack">
              {experience.map((item) => (
                <article key={item.id} className="timeline-card" data-hover>
                  <div className="tc-meta">
                    <span className="tc-period">{item.period}</span>
                    <span className="tc-loc">{item.location}</span>
                  </div>
                  <h4 className="tc-role">{item.role}</h4>
                  <p className="tc-org">{item.company}</p>
                  <p className="tc-summary">{item.shortSummary || item.description}</p>
                  <div className="tc-tags">
                    {item.stack?.slice(0, 4).map((tag, i) => (
                      <span key={i} className="tc-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Colonne Formation */}
          <div className="resume-column">
            <h3 className="resume-col-title">Formation</h3>

            <div className="timeline-stack">
              {education.map((edu) => (
                <article key={edu.id} className="timeline-card edu-card" data-hover>
                  <div className="tc-meta">
                    <span className="tc-period">{edu.period}</span>
                    <span className="tc-loc">{edu.location}</span>
                  </div>
                  <h4 className="tc-role">{edu.institution}</h4>
                  <p className="tc-org">{edu.focus}</p>
                  <p className="tc-summary">{edu.shortSummary || edu.description}</p>
                  <div className="tc-tags">
                    {edu.highlights?.map((tag, i) => (
                      <span key={i} className="tc-tag">
                        {tag}
                      </span>
                    ))}
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
