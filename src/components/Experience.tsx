import { experiences } from '../data';

export function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <p className="section-label">04 — Experiencia</p>
        <h2 style={{ marginBottom: '3rem' }}>Trayectoria profesional</h2>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="experience-item fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="experience-left">
                <h3 className="experience-company">{exp.company}</h3>
                <p className="experience-role">{exp.role}</p>
                <p className="experience-period">{exp.period}</p>
              </div>

              <div className="experience-right">
                <p className="experience-desc">{exp.description}</p>
                <ul className="experience-highlights">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
