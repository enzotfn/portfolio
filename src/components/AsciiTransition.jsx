import { useEffect, useRef, useState } from 'react';
import './AsciiTransition.css';

const ASCII_RAMP = ' .·:+=*#%@';
const BLOCK_RAMP = ' ░▒▓█';

/**
 * Animated ASCII-Art & Pixel-Art Dither Transition Band between Portfolio Sections.
 * Renders only while visible in the viewport (zero idle CPU) and ripples under the cursor.
 */
export default function AsciiTransition({ variant = 'dither' }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1, y: -1 });
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.01, rootMargin: '120px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = rect?.width || window.innerWidth;
      const h = rect?.height || 88;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // 4x4 Bayer Matrix for authentic retro pixel-art dithering
    const bayer4 = [
      [0, 8, 2, 10],
      [12, 4, 14, 6],
      [3, 11, 1, 9],
      [15, 7, 13, 5],
    ];

    const render = (time) => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      const w = rect?.width || window.innerWidth;
      const h = rect?.height || 88;
      ctx.clearRect(0, 0, w, h);

      const t = time * 0.0018;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      if (variant === 'pixel-bayer' || variant === 'colonnade') {
        // Authentic Pixel-Art Bayer Dither / Architectural Pixel Wave
        const cell = 7;
        const cols = Math.ceil(w / cell);
        const rows = Math.ceil(h / cell);

        for (let r = 0; r < rows; r++) {
          const ny = r / rows;
          // Bell curve intensity centered vertically
          const vEnvelope = Math.sin(ny * Math.PI);

          for (let c = 0; c < cols; c++) {
            const nx = c / cols;
            const px = c * cell;
            const py = r * cell;

            let wave;
            if (variant === 'colonnade') {
              // Classical colonnade / fluted pillar pixel rhythm
              const pillar = Math.abs(Math.sin(nx * Math.PI * 14 + t * 0.35));
              wave = vEnvelope * (0.35 + pillar * 0.65);
            } else {
              wave =
                vEnvelope *
                (0.5 + 0.32 * Math.sin(nx * 12 + t) + 0.22 * Math.cos(nx * 22 - t * 1.3));
            }

            // Mouse ripple boost
            if (mx >= 0) {
              const dist = Math.hypot(px - mx, py - my);
              if (dist < 110) {
                wave += (1 - dist / 110) * 0.55;
              }
            }

            const threshold = (bayer4[r % 4][c % 4] + 0.5) / 16;
            if (wave > threshold * 1.15) {
              ctx.fillStyle =
                wave > 0.85
                  ? '#1b4d3e'
                  : wave > 0.62
                  ? 'rgba(42, 111, 89, 0.55)'
                  : 'rgba(154, 107, 36, 0.38)';
              ctx.fillRect(px, py, cell - 1, cell - 1);
            }
          }
        }
      } else {
        // Living ASCII-Art Field (Glyph / Block Dither / Oscilloscope)
        const charW = 11;
        const charH = 14;
        const cols = Math.ceil(w / charW);
        const rows = Math.ceil(h / charH);
        const ramp = variant === 'blocks' ? BLOCK_RAMP : ASCII_RAMP;

        ctx.font = '12px "JetBrains Mono", monospace';
        ctx.textBaseline = 'middle';

        for (let r = 0; r < rows; r++) {
          const ny = (r + 0.5) / rows;
          const vFade = Math.sin(ny * Math.PI);

          for (let c = 0; c < cols; c++) {
            const nx = c / cols;
            const px = c * charW;
            const py = r * charH + charH * 0.5;

            let val;
            if (variant === 'signal') {
              // Oscilloscope sine ribbon in ASCII
              const targetY = 0.5 + Math.sin(nx * 16 + t * 1.4) * 0.28 * Math.cos(nx * 5 - t * 0.6);
              const distY = Math.abs(ny - targetY);
              val = Math.max(0, 1 - distY * 3.8);
            } else {
              // Flowing interference wave
              val =
                vFade *
                (0.45 +
                  0.3 * Math.sin(nx * 14 + t + ny * 4) +
                  0.25 * Math.cos(nx * 24 - t * 1.2));
            }

            if (mx >= 0) {
              const dist = Math.hypot(px - mx, py - my);
              if (dist < 120) {
                val += (1 - dist / 120) * 0.55;
              }
            }

            const clamped = Math.max(0, Math.min(0.99, val));
            const idx = Math.floor(clamped * ramp.length);
            const ch = ramp[idx];

            if (ch && ch !== ' ') {
              ctx.fillStyle =
                clamped > 0.72
                  ? '#1b4d3e'
                  : clamped > 0.45
                  ? 'rgba(27, 77, 62, 0.52)'
                  : 'rgba(24, 24, 23, 0.22)';
              ctx.fillText(ch, px, py);
            }
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [inView, variant]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1, y: -1 };
  };

  return (
    <div
      ref={wrapRef}
      className="ascii-transition-band"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="ascii-transition-canvas" />
    </div>
  );
}

