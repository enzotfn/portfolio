import { useState } from 'react';
import { personalInfo } from '../data/portfolio-data';
import { ArrowUpRight, ArrowUp } from './ArrowIcon';
import './Contact.css';

export default function Contact() {
  const [copiedChannel, setCopiedChannel] = useState(null);

  const handleCopy = (channel, text) => {
    navigator.clipboard?.writeText(text);
    setCopiedChannel(channel);
    setTimeout(() => setCopiedChannel(null), 2000);
  };

  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="contact workstation-scene"
      id="contact"
      aria-label="Contact"
    >
      <div className="scene-inner">
        <div className="slate-header">
          <h2 className="slate-title">
            Entrer en <span className="italic-amber">Dialogue</span>
          </h2>
        </div>

        <div className="contact-gallery-grid">
          <div className="contact-editorial-col">
            <p className="contact-lead-text">
              Vous avez un projet d&apos;ingénierie créative, un prototype XR / réalité virtuelle, ou une opportunité de stage de fin d&apos;études de 6 mois à partir de <strong>mi-février / mars 2027</strong> ? Échangeons autour d&apos;un café à <strong>Nantes, Lyon ou Nancy</strong> — ou en visio.
            </p>

            <div className="contact-clean-channels">
              <div className="clean-channel-row">
                <span className="channel-roman">COURRIEL</span>
                <div className="channel-main-line">
                  <a href={`mailto:${personalInfo.email}`} className="channel-big-link" data-hover>
                    {personalInfo.email}
                  </a>
                  <button
                    type="button"
                    className="channel-copy-pill"
                    onClick={() => handleCopy('email', personalInfo.email)}
                    data-hover
                  >
                    {copiedChannel === 'email' ? 'Copié ✓' : 'Copier'}
                  </button>
                </div>
              </div>

              <div className="clean-channel-row">
                <span className="channel-roman">TÉLÉPHONE</span>
                <div className="channel-main-line">
                  <a href={`tel:${personalInfo.phone}`} className="channel-big-link" data-hover>
                    {personalInfo.phone}
                  </a>
                  <button
                    type="button"
                    className="channel-copy-pill"
                    onClick={() => handleCopy('phone', personalInfo.phone)}
                    data-hover
                  >
                    {copiedChannel === 'phone' ? 'Copié ✓' : 'Copier'}
                  </button>
                </div>
              </div>

              <div className="clean-channel-row">
                <span className="channel-roman">RÉSEAUX</span>
                <div className="channel-socials-row">
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover
                    id="contact-linkedin"
                  >
                    LinkedIn<ArrowUpRight size={15} />
                  </a>
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover
                    id="contact-github"
                  >
                    GitHub<ArrowUpRight size={15} />
                  </a>
                  <a
                    href={personalInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover
                    id="contact-instagram"
                  >
                    Instagram<ArrowUpRight size={15} />
                  </a>
                  <a
                    href={personalInfo.social.letterboxd}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover
                    id="contact-letterboxd"
                  >
                    Letterboxd<ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="radar-map-frame">
            <iframe
              src={personalInfo.mapEmbed}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'grayscale(10%) contrast(1.02)',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation - Polytech Nantes"
            />
            <div className="map-cartel-caption">
              <span>POLYTECH NANTES · {personalInfo.location}</span>
            </div>
          </div>
        </div>

        <footer className="workstation-footer">
          <div className="footer-left">
            <span className="footer-unit">Enzo Tofani © {new Date().getFullYear()}</span>
          </div>

          <button type="button" className="footer-top-btn" onClick={scrollToTop} data-hover>
            <span>Haut de page</span>
            <ArrowUp size={14} />
          </button>
        </footer>
      </div>
    </section>
  );
}
