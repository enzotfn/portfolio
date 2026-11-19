import { useState, useEffect, useCallback } from 'react';
import { navItems } from '../data/portfolio-data';
import './Navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollPct, setScrollPct] = useState(0);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollY = window.scrollY + window.innerHeight * 0.4;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const pct = Math.min(100, Math.max(0, Math.round((window.scrollY / maxScroll) * 100)));
      setScrollPct(pct);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation [1-6]
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      const keyMap = { '0': 0, '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5 };
      if (keyMap[e.key] !== undefined && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const target = navItems[keyMap[e.key]];
        if (target) scrollTo(target.id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollTo]);

  const currentNav = navItems.find((n) => n.id === activeSection) || navItems[0];

  return (
    <>
      <header className="hud-top-bar" aria-label="En-tête du portfolio">
        <div className="hud-top-left">
          <span className="hud-unit-id">ENZO TOFANI</span>
          <span className="hud-divider">—</span>
          <span className="hud-subtitle">SYSTÈMES, XR &amp; ARTS VISUELS</span>
        </div>

        <div className="hud-top-center">
          <span className="hud-room-indicator">
            Chapitre {currentNav.code} &middot; <em>{currentNav.label}</em>
          </span>
        </div>

        <div className="hud-top-right">
          <button
            type="button"
            className="hud-status-pill"
            onClick={() => scrollTo('contact')}
            data-hover
          >
            <span className="led-dot signal" />
            <span>STAGE PFE 2027</span>
          </button>
        </div>

        <div className="hud-progress-track" aria-hidden="true">
          <div className="hud-progress-fill" style={{ width: `${scrollPct}%` }} />
        </div>
      </header>

      <nav className="navbar" id="main-nav" role="navigation" aria-label="Navigation principale">
        <button
          type="button"
          className="nav-brand"
          onClick={() => scrollTo('hero')}
          data-hover
          title="Accueil [00]"
        >
          ET
        </button>

        <ul className="nav-list">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="nav-item">
                <button
                  type="button"
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => scrollTo(item.id)}
                  aria-label={`Aller à ${item.label}`}
                  id={`nav-${item.id}`}
                  data-hover
                >
                  <span className="nav-code">{item.code}</span>
                  <span className="nav-label">{item.label}</span>
                  {isActive && <span className="nav-indicator" />}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="nav-catalog-mark" aria-hidden="true">
          N°26
        </div>
      </nav>
    </>
  );
}
