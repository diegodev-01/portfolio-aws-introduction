import { projects } from '../data';

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label">02 — Proyectos</p>
            <h2>Trabajo seleccionado</h2>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Ver todos en GitHub →
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={project.id} className="project-card fade-in" style={{ transitionDelay: `${index * 0.08}s` }}>
              <p className="project-number">
                {String(index + 1).padStart(2, '0')}
                {project.featured && ' — DESTACADO'}
              </p>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-footer">
                <span className="project-year">{project.year}</span>
                <div className="project-links">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`Repositorio de ${project.title}`}>
                      Repo
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Demo de ${project.title}`}>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
