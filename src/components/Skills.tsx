import { skills } from '../data';

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">03 — Skills</p>
        <h2 style={{ marginBottom: '3rem' }}>Stack técnico</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.category} className="skill-category fade-in">
              <h3 className="skill-category-title">{skill.category}</h3>
              <ul className="skill-list">
                {skill.items.map((item) => (
                  <li key={item} className="skill-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
