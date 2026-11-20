import { useState, useEffect, useRef } from 'react';
import { projects, projectCategories } from '../data/portfolio-data';
import { ArrowUpRight } from './ArrowIcon';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const [vrCamIndex, setVrCamIndex] = useState(0);
  const [simPulse, setSimPulse] = useState(0);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  const filteredProjects =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  const activeProject =
    filteredProjects.find((p) => p.id === selectedProjectId) ||
    filteredProjects[0] ||
    projects[0];

  const handleFilterChange = (cat) => {
    setActiveFilter(cat);
    const nextList =
      cat === 'Tous'
        ? projects
        : projects.filter((p) => p.category.toLowerCase() === cat.toLowerCase());
    if (nextList.length > 0 && !nextList.some((p) => p.id === selectedProjectId)) {
      setSelectedProjectId(nextList[0].id);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      canvas.width = rect?.width || 460;
      canvas.height = rect?.height || 340;
    };
    resize();
    window.addEventListener('resize', resize);

    const pts = Array.from({ length: 62 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.007,
      vy: (Math.random() - 0.5) * 0.007,
      r: 1.5 + Math.random() * 2,
    }));

    const gNodes = [
      { x: 0.16, y: 0.5, label: 'A' },
      { x: 0.36, y: 0.25, label: 'B' },
      { x: 0.38, y: 0.75, label: 'C' },
      { x: 0.64, y: 0.28, label: 'D' },
      { x: 0.66, y: 0.74, label: 'E' },
      { x: 0.84, y: 0.5, label: 'F' },
    ];
    const gEdges = [
      [0, 1],
      [0, 2],
      [1, 2],
      [1, 3],
      [2, 4],
      [3, 4],
      [3, 5],
      [4, 5],
    ];

    const render = (time) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x * w;
      const my = mouseRef.current.y * h;
      const sim = activeProject.simType || 'vr360';

      if (sim === 'vr360') {
        const cx = w * 0.5;
        const cy = h * 0.5;
        const yaw = (mouseRef.current.x - 0.5) * 1.4 + vrCamIndex * 1.05;
        const pitch = (mouseRef.current.y - 0.5) * 0.7;
        const R = Math.min(w, h) * 0.36;

        for (let lat = -60; lat <= 60; lat += 30) {
          const rLat = R * Math.cos((lat * Math.PI) / 180);
          const yOff = R * Math.sin((lat * Math.PI) / 180) * Math.cos(pitch);
          ctx.beginPath();
          ctx.ellipse(cx, cy + yOff, rLat, rLat * 0.35, yaw * 0.2, 0, Math.PI * 2);
          ctx.strokeStyle =
            lat === 0 ? 'rgba(27, 77, 62, 0.5)' : 'rgba(24, 24, 23, 0.14)';
          ctx.stroke();
        }

        const cams = [
          { angle: 0 + yaw, name: 'I. Sujet' },
          { angle: 2.09 + yaw, name: 'II. Observateur' },
          { angle: 4.18 + yaw, name: 'III. Caméra 360°' },
        ];
        cams.forEach((c, idx) => {
          const px = cx + Math.cos(c.angle) * R * 1.05;
          const py = cy + Math.sin(c.angle) * R * 0.42;
          const isCurrent = idx === vrCamIndex;

          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(px, py);
          ctx.strokeStyle = isCurrent ? '#1b4d3e' : 'rgba(24, 24, 23, 0.2)';
          ctx.lineWidth = isCurrent ? 1.5 : 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(px, py, isCurrent ? 4.5 : 3, 0, Math.PI * 2);
          ctx.fillStyle = isCurrent ? '#1b4d3e' : '#2a6f59';
          ctx.fill();

          ctx.font = '10px "IBM Plex Mono", monospace';
          ctx.fillStyle = isCurrent ? '#181817' : 'rgba(24, 24, 23, 0.55)';
          ctx.fillText(c.name, px + 8, py + 3);
        });
      } else if (sim === 'network') {
        const serverX = w * 0.5;
        const serverY = h * 0.5;
        const phones = [
          { x: w * 0.18, y: h * 0.28 },
          { x: w * 0.18, y: h * 0.5 },
          { x: w * 0.18, y: h * 0.72 },
        ];
        const printers = [
          { x: w * 0.82, y: h * 0.35 },
          { x: w * 0.82, y: h * 0.65 },
        ];
        const t = (time * 0.0014 + simPulse * 0.35) % 1;

        phones.forEach((p, idx) => {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(serverX, serverY);
          ctx.strokeStyle = 'rgba(24, 24, 23, 0.16)';
          ctx.stroke();

          const pt = (t + idx * 0.33) % 1;
          const kx = p.x + (serverX - p.x) * pt;
          const ky = p.y + (serverY - p.y) * pt;
          ctx.fillStyle = '#1b4d3e';
          ctx.fillRect(kx - 2.5, ky - 2.5, 5, 5);

          ctx.beginPath();
          ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#1b4d3e';
          ctx.fill();
        });

        printers.forEach((pr, idx) => {
          ctx.beginPath();
          ctx.moveTo(serverX, serverY);
          ctx.lineTo(pr.x, pr.y);
          ctx.strokeStyle = 'rgba(24, 24, 23, 0.16)';
          ctx.stroke();

          const pt = (t + idx * 0.5) % 1;
          const kx = serverX + (pr.x - serverX) * pt;
          const ky = serverY + (pr.y - serverY) * pt;
          ctx.fillStyle = '#9a6b24';
          ctx.fillRect(kx - 2.5, ky - 2.5, 5, 5);

          ctx.beginPath();
          ctx.arc(pr.x, pr.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#9a6b24';
          ctx.fill();
        });

        ctx.beginPath();
        ctx.arc(serverX, serverY, 18, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.strokeStyle = '#1b4d3e';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      } else if (sim === 'particles') {
        pts.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const d = Math.hypot(dx, dy);
          if (d < 0.35 && d > 0.01) {
            p.vx += (dx / d) * 0.00025;
            p.vy += (dy / d) * 0.00025;
          }
          p.vx *= 0.992;
          p.vy *= 0.992;
          if (p.x < 0.04 || p.x > 0.96) p.vx *= -1;
          if (p.y < 0.06 || p.y > 0.94) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
          ctx.fillStyle = Math.hypot(p.vx, p.vy) > 0.006 ? '#1b4d3e' : '#2a6f59';
          ctx.fill();
        });

        ctx.beginPath();
        ctx.arc(mx, my, 22, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(27, 77, 62, 0.35)';
        ctx.stroke();
      } else if (sim === 'ring') {
        const cx = w * 0.5;
        const cy = h * 0.5;
        const r = Math.min(w, h) * 0.34;
        const nodeCount = 8;

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(24, 24, 23, 0.16)';
        ctx.stroke();

        const pktAngle = (time * 0.0026 + simPulse * 0.8) % (Math.PI * 2);

        for (let i = 0; i < nodeCount; i++) {
          const a = (i / nodeCount) * Math.PI * 2;
          const nx = cx + Math.cos(a) * r;
          const ny = cy + Math.sin(a) * r;
          const diff = Math.abs(((pktAngle - a + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
          const hot = diff < 0.4;

          ctx.beginPath();
          ctx.arc(nx, ny, hot ? 5 : 3.5, 0, Math.PI * 2);
          ctx.fillStyle = hot ? '#1b4d3e' : '#ffffff';
          ctx.fill();
          ctx.strokeStyle = 'rgba(24, 24, 23, 0.4)';
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(cx + Math.cos(pktAngle) * r, cy + Math.sin(pktAngle) * r, 5.5, 0, Math.PI * 2);
        ctx.fillStyle = '#1b4d3e';
        ctx.fill();
      } else if (sim === 'graph' || sim === 'ai') {
        gEdges.forEach(([i, j], idx) => {
          const n1 = gNodes[i];
          const n2 = gNodes[j];
          const isOptimal = idx === 0 || idx === 3 || idx === 6;
          ctx.beginPath();
          ctx.moveTo(n1.x * w, n1.y * h);
          ctx.lineTo(n2.x * w, n2.y * h);
          ctx.strokeStyle = isOptimal ? '#1b4d3e' : 'rgba(24, 24, 23, 0.16)';
          ctx.lineWidth = isOptimal ? 1.8 : 1;
          ctx.stroke();
        });

        gNodes.forEach((n, idx) => {
          const nx = n.x * w;
          const ny = n.y * h;
          const onPath = idx === 0 || idx === 1 || idx === 3 || idx === 5;
          ctx.beginPath();
          ctx.arc(nx, ny, 9, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
          ctx.strokeStyle = onPath ? '#1b4d3e' : 'rgba(24, 24, 23, 0.35)';
          ctx.stroke();
        });
      } else {
        const cx = w * 0.5;
        const cy = h * 0.5;
        for (let i = 1; i <= 6; i++) {
          const r = i * 24 + Math.sin(time * 0.002 + i) * 4;
          ctx.beginPath();
          ctx.arc(
            cx + (mx - cx) * 0.05 * i,
            cy + (my - cy) * 0.05 * i,
            r,
            0,
            Math.PI * 2
          );
          ctx.strokeStyle = i === 4 ? 'rgba(27, 77, 62, 0.5)' : 'rgba(24, 24, 23, 0.14)';
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [activeProject, vrCamIndex, simPulse]);

  const handleCanvasMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current.x = (e.clientX - rect.left) / rect.width;
    mouseRef.current.y = (e.clientY - rect.top) / rect.height;
  };

  return (
    <section
      className="projects-section workstation-scene"
      id="projects"
      aria-label="Œuvres, Projets et Toile Interactive"
    >
      <div className="scene-inner">
        <div className="slate-header">
          <h2 className="slate-title">
            Réalisations <span className="italic-amber">&amp; Installations</span>
          </h2>

          <div className="gallery-filter-bar" role="tablist" aria-label="Filtrer les réalisations">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`gallery-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => handleFilterChange(cat)}
                data-hover
                id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-editorial-split">
          <div className="projects-flowing-list">
            {filteredProjects.map((proj, idx) => {
              const isSelected = proj.id === activeProject.id;
              return (
                <article
                  key={proj.id}
                  className={`project-editorial-item ${isSelected ? 'active' : ''}`}
                  onMouseEnter={() => setSelectedProjectId(proj.id)}
                  onClick={() => setSelectedProjectId(proj.id)}
                  data-hover
                  id={`project-${idx}`}
                >
                  <div className="proj-item-top">
                    <span className="proj-num">N° {String(idx + 1).padStart(2, '0')}</span>
                    <span className="proj-cat-year">
                      {proj.category} &middot; {proj.year}
                    </span>
                  </div>

                  <div className="proj-title-line">
                    <h3 className="proj-editorial-title">{proj.title}</h3>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-direct-link"
                        onClick={(e) => e.stopPropagation()}
                        data-hover
                      >
                        Explorer<ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>

                  <p className="proj-editorial-desc">{proj.description}</p>

                  <div className="proj-editorial-medium">
                    Médium &amp; Technologies : <span>{proj.tech}</span>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="projects-sticky-column">
            <div className="sticky-museum-frame">
              <div
                className="sticky-canvas-stage"
                onMouseMove={handleCanvasMove}
                onClick={() => setSimPulse((p) => p + 1)}
                data-hover
              >
                <canvas ref={canvasRef} className="project-sim-canvas" />

                {activeProject.simType === 'vr360' && (
                  <div className="artwork-controls" onClick={(e) => e.stopPropagation()}>
                    {['I. Vue Sujet', 'II. Observateur 360°', 'III. Caméra Globale'].map(
                      (label, i) => (
                        <button
                          key={label}
                          type="button"
                          className={`artwork-ctrl-btn ${vrCamIndex === i ? 'active' : ''}`}
                          onClick={() => setVrCamIndex(i)}
                          data-hover
                        >
                          {label}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>

              <div className="sticky-frame-plaque">
                <h4 className="sticky-plaque-title">{activeProject.title}</h4>
                <p className="sticky-plaque-tech">{activeProject.tech}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
