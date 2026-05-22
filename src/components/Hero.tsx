export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Text content */}
          <div>
            <p className="hero-eyebrow">Disponible para proyectos</p>

            <h1 className="hero-title fade-in">
              <span className="line-1">Full Stack</span>
              <span className="line-2">Developer</span>
              <span className="line-3">&amp; Cloud Eng.</span>
            </h1>

            <p className="hero-description fade-in fade-in-delay-1">
              Construyo productos digitales escalables con TypeScript, React y AWS.
              Especializado en arquitecturas serverless y sistemas distribuidos.
            </p>

            <div className="hero-cta fade-in fade-in-delay-2">
              <a href="#projects" className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Ver proyectos →
              </a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Contactar
              </a>
            </div>
          </div>

          {/* Right: Code card */}
          <div className="hero-visual fade-in fade-in-delay-3">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-dot" />
                <div className="hero-card-dot" />
                <div className="hero-card-dot" />
                <span className="hero-card-title">portfolio.ts</span>
              </div>

              <div className="code-block">
                <div className="code-line">
                  <span className="code-num">1</span>
                  <span>
                    <span className="code-keyword">const </span>
                    <span className="code-var">developer</span>
                    <span> = {'{'}</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-num">2</span>
                  <span>
                    &nbsp;&nbsp;<span className="code-var">name</span>
                    <span>: </span>
                    <span className="code-string">"Tu Nombre"</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-num">3</span>
                  <span>
                    &nbsp;&nbsp;<span className="code-var">role</span>
                    <span>: </span>
                    <span className="code-string">"Full Stack Dev"</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-num">4</span>
                  <span>
                    &nbsp;&nbsp;<span className="code-var">stack</span>
                    <span>: [</span>
                    <span className="code-string">"TS"</span>,
                    <span className="code-string"> "AWS"</span>,
                    <span className="code-string"> "React"</span>
                    <span>],</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-num">5</span>
                  <span>
                    &nbsp;&nbsp;<span className="code-var">available</span>
                    <span>: </span>
                    <span className="code-value">true</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-num">6</span>
                  <span>
                    &nbsp;&nbsp;<span className="code-var">experience</span>
                    <span>: </span>
                    <span className="code-type">Years</span>
                    <span>.</span>
                    <span className="code-value">FIVE_PLUS</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-num">7</span>
                  <span>{'}'}</span>
                </div>
                <div className="code-line">
                  <span className="code-num">8</span>
                  <span className="code-comment">&nbsp;&nbsp;// Ready to build something great</span>
                </div>
                <div className="code-line">
                  <span className="code-num">9</span>
                  <span><span className="code-cursor" /></span>
                </div>
              </div>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">5+</span>
                <span className="hero-stat-label">Años exp.</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">20+</span>
                <span className="hero-stat-label">Proyectos</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">AWS</span>
                <span className="hero-stat-label">Certified</span>
              </div>
            </div>

            <div className="hero-bg-text" aria-hidden="true">DEV</div>
          </div>
        </div>
      </div>
    </section>
  );
}
