import { useEffect, useRef } from 'react';

/**
 * Interactive "Beaux-Arts & Code" Canvas Component (Light Mode & Violet Edition)
 * Renders classical chiaroscuro sculptural forms and Renaissance perspective vaults
 * as copperplate / violet-ink museum etchings on warm paper.
 */
export default function ArtEngraving({ variant = 'sculpture', className = '', height = 180 }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      canvas.width = rect?.width || 600;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = (time) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x * w;
      const my = mouseRef.current.y * h;

      if (variant === 'architecture') {
        const vanishX = w * 0.5 + (mx - w * 0.5) * 0.15;
        const vanishY = h * 0.52 + (my - h * 0.5) * 0.12;

        // Concentric classical arches in violet & ink
        for (let i = 1; i <= 7; i++) {
          const t = i / 7;
          const archR = Math.min(w * 0.42, h * 1.1) * t;
          ctx.beginPath();
          ctx.arc(vanishX, vanishY + archR * 0.18, archR, Math.PI, 0, false);
          ctx.strokeStyle =
            i === 5
              ? 'rgba(109, 40, 217, 0.45)'
              : `rgba(23, 20, 31, ${0.08 + t * 0.14})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        const rays = 16;
        for (let r = 0; r < rays; r++) {
          const angle = (r / rays) * Math.PI * 2;
          ctx.beginPath();
          ctx.moveTo(vanishX, vanishY);
          ctx.lineTo(vanishX + Math.cos(angle) * w * 0.6, vanishY + Math.sin(angle) * h * 1.2);
          ctx.strokeStyle = 'rgba(109, 40, 217, 0.08)';
          ctx.stroke();
        }
      } else if (variant === 'sculpture') {
        const rows = 22;
        const cols = 64;
        const cellW = w / cols;
        const cellH = h / rows;

        for (let r = 0; r < rows; r++) {
          const ny = (r / rows) * 2 - 1;
          for (let c = 0; c < cols; c++) {
            const nx = (c / cols) * 2 - 1;
            const px = c * cellW + cellW * 0.5;
            const py = r * cellH + cellH * 0.5;

            const d1 = Math.hypot(nx + 0.22, ny * 0.85);
            const d2 = Math.hypot(nx - 0.25, ny * 0.9 - 0.1);
            const drapery = Math.sin(nx * 7 + ny * 3 + time * 0.0008) * 0.18;
            const luminance = Math.max(0, 1 - Math.min(d1, d2) * 1.35 + drapery);

            const distMouse = Math.hypot(px - mx, py - my);
            const torch = Math.max(0, 1 - distMouse / 220) * 0.45;
            const finalLum = Math.min(1, luminance + torch);

            if (finalLum > 0.15) {
              const radius = finalLum * (cellH * 0.38);
              ctx.beginPath();
              ctx.arc(px, py, radius, 0, Math.PI * 2);
              ctx.fillStyle =
                torch > 0.2
                  ? `rgba(109, 40, 217, ${finalLum * 0.7})`
                  : `rgba(23, 20, 31, ${finalLum * 0.35})`;
              ctx.fill();
            }
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [variant, height]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
      active: true,
    };
  };

  return (
    <div
      className={`art-engraving-wrap ${className}`}
      onMouseMove={handleMove}
      style={{ height: `${height}px`, width: '100%', position: 'relative', overflow: 'hidden' }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
}
