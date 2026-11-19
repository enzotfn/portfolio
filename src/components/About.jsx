import { useState } from 'react';
import { personalInfo } from '../data/portfolio-data';
import profilePic from '../assets/profil_pic.jpg';
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
          <div className="slate-header-left">
            <span className="slate-code">01 // PORTRAIT</span>
            <h2 className="slate-title">
              Entre Systèmes <span className="italic-amber">&amp; Beaux-Arts</span>
            </h2>
          </div>
          <span className="slate-meta">Informatique, Espace Spatial &amp; Culture Visuelle</span>
        </div>

        <div className="about-gallery-grid">
          {/* Portrait naturel sans effets */}
          <div className="portrait-frame">
            <img
              className="portrait-image"
              src={profilePic}
              alt="Portrait d'Enzo Tofani"
            />
          </div>

          {/* Biographie & Coordonnées */}
          <div className="about-curatorial-col">
            <div className="bio-prose">{personalInfo.bio}</div>

            <div className="about-cartel-footer">
              <div className="cartel-item">
                <span className="cartel-label">COURRIEL DIRECT</span>
                <button
                  type="button"
                  className="cartel-copy-link"
                  onClick={() => copyValue('email', personalInfo.email)}
                  data-hover
                >
                  {personalInfo.email}{' '}
                  <span className="copy-badge">
                    {copiedKey === 'email' ? '[COPIÉ ✓]' : '[COPIER]'}
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
                    {copiedKey === 'phone' ? '[COPIÉ ✓]' : '[COPIER]'}
                  </span>
                </button>
              </div>

              <div className="cartel-item">
                <span className="cartel-label">RÉSEAUX &amp; CODE</span>
                <div className="cartel-socials">
                  <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" data-hover>
                    LinkedIn ↗
                  </a>
                  <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" data-hover>
                    GitHub ↗
                  </a>
                  <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" data-hover>
                    Instagram ↗
                  </a>
                  <a href={personalInfo.social.letterboxd} target="_blank" rel="noopener noreferrer" data-hover>
                    Letterboxd ↗
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
