import { useState, useEffect, useRef } from 'react';
import { projects, projectCategories } from '../data/portfolio-data';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleFilter = (category) => {
    if (category === activeFilter) return;
    setAnimating(true);
    setActiveFilter(category);

    setTimeout(() => {
      const next =
        category === 'All'
          ? projects
          : projects.filter(
              (p) => p.category.toLowerCase() === category.toLowerCase()
            );
      setFilteredProjects(next);
      setAnimating(false);
    }, 300);
  };

  return (
    <section
      className="projects-section section"
      id="projects"
      ref={sectionRef}
      aria-label="Projects"
    >
      <div className="projects-container">
        <div className={`projects-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">04 — Projects</span>
          <h2 className="section-title">
            Featured <span className="highlight">Works</span>
          </h2>
        </div>

        {/* Category filters */}
        <div className={`filter-bar ${isVisible ? 'visible' : ''}`}>
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => handleFilter(cat)}
              data-hover
              id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className={`projects-grid ${animating ? 'fade-out' : 'fade-in'}`}>
          {filteredProjects.map((project, index) => {
            const Tag = project.link ? 'a' : 'div';
            const linkProps = project.link
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <Tag
                key={project.title}
                className={`project-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
                id={`project-${index}`}
                data-hover
                {...linkProps}
              >
                <div className="project-visual">
                  <div
                    className="project-color-bg"
                    style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
                  />
                  <span
                    className="project-initial"
                    style={{ color: project.color }}
                  >
                    {project.title.charAt(0)}
                  </span>
                  {project.link && (
                    <div className="project-external">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="project-info">
                  <span className="project-cat-tag">{project.category}</span>
                  <h4 className="project-name">{project.title}</h4>
                  <p className="project-desc">{project.description}</p>
                </div>

                <div className="project-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
