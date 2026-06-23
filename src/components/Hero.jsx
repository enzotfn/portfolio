import { useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolio-data';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create floating particles (AR-style dots)
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const pulse = Math.sin(time * p.pulseSpeed + p.pulsePhase) * 0.3 + 0.7;
        const alpha = p.opacity * pulse;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184, 77, 255, ${alpha})`;
        ctx.fill();
      });

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(184, 77, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section" id="hero" aria-label="Introduction">
      <canvas ref={canvasRef} className="hero-particles" aria-hidden="true" />

      {/* Cinematic frame corners */}
      <div className="hero-frame" aria-hidden="true">
        <span className="frame-corner top-left" />
        <span className="frame-corner top-right" />
        <span className="frame-corner bottom-left" />
        <span className="frame-corner bottom-right" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Portfolio — 2025</span>
          <span className="eyebrow-line" />
        </div>

        <h1 className="hero-title">
          <span className="hero-name-line">
            <span className="hero-letter" style={{ animationDelay: '0.1s' }}>E</span>
            <span className="hero-letter" style={{ animationDelay: '0.15s' }}>n</span>
            <span className="hero-letter" style={{ animationDelay: '0.2s' }}>z</span>
            <span className="hero-letter" style={{ animationDelay: '0.25s' }}>o</span>
          </span>
          <span className="hero-name-line hero-lastname">
            <span className="hero-letter" style={{ animationDelay: '0.4s' }}>T</span>
            <span className="hero-letter" style={{ animationDelay: '0.45s' }}>o</span>
            <span className="hero-letter" style={{ animationDelay: '0.5s' }}>f</span>
            <span className="hero-letter" style={{ animationDelay: '0.55s' }}>a</span>
            <span className="hero-letter" style={{ animationDelay: '0.6s' }}>n</span>
            <span className="hero-letter" style={{ animationDelay: '0.65s' }}>i</span>
          </span>
        </h1>

        <p className="hero-subtitle">
          <span className="subtitle-role">{personalInfo.title}</span>
          <span className="subtitle-divider">·</span>
          <span className="subtitle-passion">{personalInfo.tagline}</span>
        </p>

        <button
          className="hero-cta"
          onClick={scrollToAbout}
          data-hover
          id="hero-cta"
        >
          <span className="cta-text">Enter the Experience</span>
          <span className="cta-arrow">→</span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
