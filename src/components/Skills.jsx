import { services, languages, competences } from '../data/portfolio-data';
import './Skills.css';

const DOMAIN_ICONS = {
  xr: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="3" />
      <circle cx="8" cy="12" r="2.2" />
      <circle cx="16" cy="12" r="2.2" />
      <path d="M10.2 12h3.6" />
    </svg>
  ),
  fullstack: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 20h8M12 18v2M8 9l-2 2 2 2M16 9l2 2-2 2M13 8l-2 6" />
    </svg>
  ),
  systems: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  ),
  network: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M10.6 7.1 6.4 15.8M13.4 7.1l4.2 8.7M7.5 18h9" />
    </svg>
  ),
  direction: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <rect x="7" y="7" width="10" height="10" />
      <path d="M3 3l4 4M21 3l-4 4M3 21l4-4M21 21l-4-4" />
    </svg>
  ),
};

const STACK_GROUPS = [
  {
    title: 'Frontend & Création',
    items: ['React 19', 'Vite', 'Tailwind CSS', 'HTML / CSS Moderne', 'Canvas 2D', 'UI / UX'],
    note: 'Applications web livrées en production et interfaces interactives.',
  },
  {
    title: 'Systèmes & Réseaux',
    items: ['C / C++', 'Golang', 'Linux', 'Bash', 'TCP/IP & Sockets', 'Architecture Réseau'],
    note: 'Spécialité ingénieur Polytech, simulations concurrentes et bas-niveau.',
  },
  {
    title: 'Backend, IA & Mobile',
    items: ['Python', 'Node.js', 'Strapi CMS', 'SQL / API REST', 'Webhooks & Agents IA', 'Kotlin / Android', 'Java'],
    note: 'Serveurs de synchronisation terrain, automatisation et clients mobiles.',
  },
];

export default function Skills() {
  return (
    <section className="skills workstation-scene" id="skills" aria-label="Savoir-Faire et Compétences">
      <div className="scene-inner">
        <div className="slate-header">
          <h2 className="slate-title">
            Disciplines <span className="italic-amber">&amp; Architecture Technique</span>
          </h2>
        </div>

        {/* 1. Domaines d'intervention imagés & concis (sans sous-titres gris) */}
        <div className="skills-block">
          <h3 className="block-title">Domaines d&apos;intervention</h3>

          <div className="domains-clean-grid">
            {services.map((srv) => (
              <article key={srv.id} className="domain-clean-card" data-hover>
                <div className="domain-icon-box" aria-hidden="true">
                  {DOMAIN_ICONS[srv.id]}
                </div>
                <h4 className="domain-title">{srv.title}</h4>
                <p className="domain-desc">{srv.shortDesc || srv.description}</p>
                <div className="domain-tags">
                  {srv.tags.slice(0, 4).map((t) => (
                    <span key={t} className="domain-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 2. Stack Technique structurée en 3 pôles + Langues */}
        <div className="skills-block">
          <h3 className="block-title">Stack technique &amp; Langues</h3>

          <div className="stack-bento-grid">
            {STACK_GROUPS.map((group) => (
              <div key={group.title} className="stack-group-card">
                <h4 className="stack-group-title">{group.title}</h4>
                <p className="stack-group-note">{group.note}</p>
                <div className="stack-pill-list">
                  {group.items.map((tech) => (
                    <span key={tech} className="stack-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="languages-strip">
            {languages.map((lang) => (
              <div key={lang.code} className="lang-card">
                <span className="lang-code-tag">{lang.code}</span>
                <div className="lang-card-body">
                  <div className="lang-card-top">
                    <span className="lang-clean-name">{lang.name}</span>
                    <span className="lang-clean-metric">{lang.metric}</span>
                  </div>
                  <span className="lang-clean-detail">{lang.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Ouverture culturelle & atouts */}
        <div className="skills-block">
          <h3 className="block-title">Ouverture culturelle &amp; Terrain</h3>

          <div className="milestones-clean-grid">
            {competences.map((comp) => (
              <div key={comp.code} className="milestone-clean-item">
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
