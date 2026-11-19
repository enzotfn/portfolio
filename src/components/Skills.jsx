import { services, technicalSkills, languages, competences } from '../data/portfolio-data';
import ArtEngraving from './ArtEngraving';
import './Skills.css';

const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

export default function Skills() {
  return (
    <section className="skills workstation-scene" id="skills" aria-label="Disciplines et Savoir-Faire">
      <div className="scene-inner">
        <div className="slate-header">
          <div className="slate-header-left">
            <span className="slate-code">03 // SAVOIR-FAIRE</span>
            <h2 className="slate-title">
              Disciplines <span className="italic-amber">&amp; Architecture Technique</span>
            </h2>
          </div>
          <span className="slate-meta">Cinq Domaines Clés &middot; Systèmes, XR &amp; Culture Visuelle</span>
        </div>

        {/* TEMPS I : Les 5 Domaines en Cartes Épurées */}
        <div className="skills-block">
          <div className="skills-block-head">
            <span className="block-roman">I.</span>
            <h3 className="block-title">Domaines d&apos;Intervention</h3>
          </div>

          <div className="domains-clean-grid">
            {services.map((srv, idx) => (
              <article key={srv.id} className="domain-clean-card" data-hover>
                <div className="domain-card-top">
                  <span className="domain-roman">{ROMAN[idx]}</span>
                  <span className="domain-code">{srv.subtitle}</span>
                </div>
                <h4 className="domain-title">{srv.title}</h4>
                <p className="domain-desc">{srv.description}</p>
                <div className="domain-tags">
                  {srv.tags.map((t) => (
                    <span key={t} className="domain-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* TEMPS II : Stack Technique & Langues en Typographie Claire */}
        <div className="skills-block">
          <div className="skills-block-head">
            <span className="block-roman">II.</span>
            <h3 className="block-title">Architecture Technique &amp; Langues</h3>
          </div>

          <div className="stack-and-lang-grid">
            <div className="stack-clean-list">
              {technicalSkills.map((sk) => (
                <div key={sk.name} className="stack-clean-row">
                  <div className="stack-row-left">
                    <span className="stack-name">{sk.name}</span>
                    <span className="stack-context">{sk.context}</span>
                  </div>
                  <span className="stack-tier">{sk.tier}</span>
                </div>
              ))}
            </div>

            <div className="languages-clean-col">
              <div className="lang-col-label">LANGUES &amp; COMMUNICATION</div>
              {languages.map((lang) => (
                <div key={lang.code} className="lang-clean-item">
                  <div className="lang-clean-top">
                    <span className="lang-clean-name">{lang.name}</span>
                    <span className="lang-clean-metric">{lang.metric}</span>
                  </div>
                  <span className="lang-clean-detail">{lang.detail}</span>
                </div>
              ))}

              <div className="skills-art-box">
                <ArtEngraving variant="sculpture" height={115} />
              </div>
            </div>
          </div>
        </div>

        {/* TEMPS III : Atouts Humains & Ouverture Culturelle */}
        <div className="skills-block">
          <div className="skills-block-head">
            <span className="block-roman">III.</span>
            <h3 className="block-title">Ouverture Culturelle, Scène &amp; Terrain</h3>
          </div>

          <div className="milestones-clean-grid">
            {competences.map((comp) => (
              <div key={comp.code} className="milestone-clean-item">
                <span className="milestone-clean-type">{comp.type}</span>
                <h4 className="milestone-clean-name">{comp.name}</h4>
                <p className="milestone-clean-detail">{comp.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
