import { useState, useEffect, useCallback } from 'react';
import { navItems } from '../data/portfolio-data';
import './Navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

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

  return (
    <nav className="navbar" id="main-nav" role="navigation" aria-label="Navigation principale">
      <button
        type="button"
        className="nav-brand"
        onClick={() => scrollTo('hero')}
        data-hover
        title="Accueil"
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
                <span className="nav-dot" aria-hidden="true" />
                <span className="nav-label">{item.label}</span>
                {isActive && <span className="nav-indicator" />}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="nav-spacer" aria-hidden="true" />
    </nav>
  );
}
