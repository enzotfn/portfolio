import { useState } from 'react';
import { personalInfo } from '../data/portfolio-data';
import profilePic from '../assets/profil_pic.jpg';
import { ArrowUpRight } from './ArrowIcon';
import './About.css';

export default function About() {
  const [copiedKey, setCopiedKey] = useState(null);

  const copyValue = (key, text) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  return (
    <section className="about workstation-scene" id="about" aria-label="Portrait et Démarche">
      <div className="scene-inner">
        <div className="slate-header">
          <h2 className="slate-title">
            Entre Systèmes <span className="italic-amber">&amp; Beaux-Arts</span>
          </h2>
        </div>

        <div className="about-gallery-grid">
          <div className="portrait-frame">
            <img
              className="portrait-image"
              src={profilePic}
              alt="Portrait d'Enzo Tofani"
            />
          </div>

          <div className="about-curatorial-col">
            <div className="bio-prose">{personalInfo.bio}</div>

            <div className="about-cartel-footer">
              <div className="cartel-item">
                <span className="cartel-label">COURRIEL</span>
                <button
                  type="button"
                  className="cartel-copy-link"
                  onClick={() => copyValue('email', personalInfo.email)}
                  data-hover
                >
                  {personalInfo.email}{' '}
                  <span className="copy-badge">
                    {copiedKey === 'email' ? 'Copié ✓' : 'Copier'}
                  </span>
                </button>
              </div>

              <div className="cartel-item">
                <span className="cartel-label">TÉLÉPHONE</span>
                <button
                  type="button"
                  className="cartel-copy-link"
                  onClick={() => copyValue('phone', personalInfo.phone)}
                  data-hover
                >
                  {personalInfo.phone}{' '}
                  <span className="copy-badge">
                    {copiedKey === 'phone' ? 'Copié ✓' : 'Copier'}
                  </span>
                </button>
              </div>

              <div className="cartel-item">
                <span className="cartel-label">LIENS</span>
                <div className="cartel-socials">
                  <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" data-hover>
                    LinkedIn<ArrowUpRight size={13} />
                  </a>
                  <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" data-hover>
                    GitHub<ArrowUpRight size={13} />
                  </a>
                  <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" data-hover>
                    Instagram<ArrowUpRight size={13} />
                  </a>
                  <a href={personalInfo.social.letterboxd} target="_blank" rel="noopener noreferrer" data-hover>
                    Letterboxd<ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
