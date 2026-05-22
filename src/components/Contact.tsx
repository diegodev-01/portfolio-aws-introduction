import { useState, type FormEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">05 — Contacto</p>
        <h2 style={{ marginBottom: '3rem' }}>Hablemos</h2>

        <div className="contact-grid">
          {/* Left */}
          <div className="contact-left">
            <h3>¿Tienes un proyecto en mente?</h3>
            <p>
              Estoy disponible para proyectos freelance, posiciones full-time y colaboraciones.
              No dudes en escribirme.
            </p>

            <div className="contact-links">
              <a
                href="mailto:hola@tudominio.com"
                className="contact-link"
                aria-label="Enviar email"
              >
                <span className="contact-link-icon" aria-hidden="true">✉</span>
                hola@tudominio.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="LinkedIn"
              >
                <span className="contact-link-icon" aria-hidden="true">in</span>
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="GitHub"
              >
                <span className="contact-link-icon" aria-hidden="true">⌥</span>
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Twitter / X"
              >
                <span className="contact-link-icon" aria-hidden="true">𝕏</span>
                Twitter / X
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={`form-success ${submitted ? 'visible' : ''}`} role="alert">
                ✓ Mensaje enviado. Te respondo pronto.
              </div>

              {!submitted && (
                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? 'Enviando...' : 'Enviar mensaje →'}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
