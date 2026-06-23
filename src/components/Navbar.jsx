import { useState, useEffect } from 'react';
import { navItems } from '../data/portfolio-data';
import './Navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollY = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar" id="main-nav" role="navigation" aria-label="Main navigation">
      {/* Mobile toggle */}
      <button
        className={`nav-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        id="nav-toggle"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Nav links */}
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <button
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollTo(item.id)}
              aria-label={`Navigate to ${item.label}`}
              id={`nav-${item.id}`}
              data-hover
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {activeSection === item.id && (
                <span className="nav-indicator" />
              )}
            </button>
          </li>
        ))}
      </ul>

      {/* Film reel decoration */}
      <div className="nav-reel" aria-hidden="true">
        <div className="reel-circle" />
        <div className="reel-circle" />
      </div>
    </nav>
  );
}
