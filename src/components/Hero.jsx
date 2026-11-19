import { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/portfolio-data';
import { artworks, frames, resolveGalleryAsset } from '../data/gallery-config';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  // Tirage aléatoire d'une œuvre et d'un cadre à chaque rafraîchissement de page
  const [artIndex, setArtIndex] = useState(() =>
    Math.floor(Math.random() * artworks.length)
  );
  const [frameIndex, setFrameIndex] = useState(() =>
    Math.floor(Math.random() * frames.length)
  );
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [isFullArt, setIsFullArt] = useState(false);

  const currentArt = artworks[artIndex] || artworks[0];
  const currentFrame = frames[frameIndex] || frames[0];
  const artImageUrl = resolveGalleryAsset(currentArt.image);
  const frameImageUrl = resolveGalleryAsset(currentFrame.image);

  // Fermer le mode plein écran avec la touche Échap
  useEffect(() => {
    if (!isFullArt) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsFullArt(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isFullArt]);

  // Rendu procédural uniquement si l'œuvre sélectionnée n'a pas de fichier `image`
  useEffect(() => {
    if (artImageUrl) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const paintMasterpiece = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      let seed = artIndex * 997 + 42;
      const rand = () => {
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return seed / 4294967296;
      };

      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, '#4a3b78');
      bgGrad.addColorStop(0.5, '#6d28d9');
      bgGrad.addColorStop(1, '#3b526b');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < 1200; i++) {
        ctx.beginPath();
        ctx.ellipse(rand() * w, rand() * h, 14 + rand() * 32, 5 + rand() * 12, 0, 0, Math.PI * 2);
        ctx.fillStyle = rand() > 0.5 ? '#8b5cf6' : '#a78bfa';
        ctx.globalAlpha = 0.28;
        ctx.fill();
      }
    };

    paintMasterpiece();
    window.addEventListener('resize', paintMasterpiece);
    return () => window.removeEventListener('resize', paintMasterpiece);
  }, [artIndex, artImageUrl]);

  const handleMouseMove = (e) => {
    if (isFullArt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({
      x: Number((nx * 1.6).toFixed(2)),
      y: Number((ny * 1.6).toFixed(2)),
    });
  };

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const shuffleExhibit = (e) => {
    e.stopPropagation();
    setArtIndex((prev) => (prev + 1) % artworks.length);
    setFrameIndex((prev) => (prev + 1) % frames.length);
  };

  const cutLeft = `${53 + parallax.x}%`;
  const cutRight = `${91 + parallax.x}%`;
  const cutTop = `${18 + parallax.y}%`;
  const cutBottom = `${80 + parallax.y}%`;

  return (
    <section
      className={`hero ${isFullArt ? 'full-art-mode' : ''}`}
      id="hero"
      aria-label="Accueil — Portfolio 2026"
      onMouseMove={handleMouseMove}
      onClick={() => {
        if (isFullArt) setIsFullArt(false);
      }}
      style={{
        '--cut-left': cutLeft,
        '--cut-right': cutRight,
        '--cut-top': cutTop,
        '--cut-bottom': cutBottom,
      }}
    >
      {/* 1. Fond d'Œuvre d'Art (Arrière-plan ambiant flouté + Toile nette non zoomée) */}
      {artImageUrl ? (
        <>
          <img
            src={artImageUrl}
            alt=""
            aria-hidden="true"
            className="hero-painting-backdrop"
          />
          <img
            src={artImageUrl}
            alt={`${currentArt.artist} — ${currentArt.title}`}
            className="hero-painting-img"
          />
        </>
      ) : (
        <canvas ref={canvasRef} className="hero-painting-canvas" aria-hidden="true" />
      )}

      {/* 2. Voile clair légèrement opaque découpé à l'intérieur du cadre (disparaît en mode plein écran) */}
      <div className="hero-opaque-veil" aria-hidden="true" />

      {/* 3. Encadrement de Tableau cliquable pour afficher le fond en entier */}
      <div
        className="orsay-frame-container"
        onClick={(e) => {
          e.stopPropagation();
          setIsFullArt((prev) => !prev);
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsFullArt((prev) => !prev);
          }
        }}
        aria-label="Cliquer dans le cadre pour afficher l'œuvre en plein écran"
        data-hover
      >
        {frameImageUrl ? (
          <div
            className="custom-frame-wrapper"
            style={{ inset: currentFrame.inset || '-24px' }}
          >
            <img
              src={frameImageUrl}
              alt={currentFrame.name}
              className="custom-frame-img"
            />
          </div>
        ) : (
          <div
            className={`orsay-gilded-frame frame-${currentFrame.styleClass || 'orsay-gold'}`}
            style={{ inset: currentFrame.inset || '-22px' }}
          >
            <span className="orsay-corner tl" aria-hidden="true" />
            <span className="orsay-corner tr" aria-hidden="true" />
            <span className="orsay-corner bl" aria-hidden="true" />
            <span className="orsay-corner br" aria-hidden="true" />
            <div className="orsay-inner-opening" />
          </div>
        )}

        {/* Cartel de musée sous le cadre */}
        <div className="orsay-cartel-bar" onClick={(e) => e.stopPropagation()}>
          <div className="orsay-cartel-info">
            <span className="orsay-artist">
              {currentArt.artist} &middot; <small>{currentFrame.name}</small>
            </span>
            <span className="orsay-work">
              <em>{currentArt.title}</em>, {currentArt.year}
            </span>
          </div>
          <button
            type="button"
            className="orsay-switch-btn"
            onClick={shuffleExhibit}
            data-hover
            title="Changer l'œuvre et le cadre"
          >
            Changer ↻
          </button>
        </div>
      </div>

      {/* Cartel flottant en mode Plein Écran (Œuvre entière) */}
      {isFullArt && (
        <div
          className="full-art-floating-bar"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="orsay-cartel-info">
            <span className="orsay-artist">{currentArt.artist}</span>
            <span className="orsay-work">
              <em>{currentArt.title}</em>, {currentArt.year}
            </span>
          </div>

          <div className="full-art-actions">
            <button
              type="button"
              className="orsay-switch-btn"
              onClick={shuffleExhibit}
              data-hover
            >
              Changer ↻
            </button>
            <button
              type="button"
              className="full-art-close-btn"
              onClick={() => setIsFullArt(false)}
              data-hover
            >
              Fermer ✕
            </button>
          </div>
        </div>
      )}

      {/* 4. Contenu Hero à gauche */}
      <div className="hero-content-wrapper">
        <div className="hero-left-card">
          <div className="hero-badge-2026">
            <span className="badge-dot" />
            <span>PORTFOLIO 2026</span>
          </div>

          <h1 className="hero-name">
            <span className="name-first">Enzo</span>
            <span className="name-last">
              Tofani<span className="name-period">.</span>
            </span>
          </h1>

          <p className="hero-short-desc">
            Élève-ingénieur en informatique à <strong>Polytech Nantes</strong> — à la croisée des{' '}
            <strong>systèmes &amp; réseaux</strong>, de la <strong>réalité virtuelle (XR)</strong> et d&apos;une passion pour les <strong>œuvres d&apos;art</strong>.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="hero-enter-btn"
              onClick={scrollToNext}
              data-hover
              id="hero-cta"
            >
              <span>Entrer</span>
              <span className="enter-arrow">↓</span>
            </button>

            <span className="hero-pfe-tag">{personalInfo.status}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
