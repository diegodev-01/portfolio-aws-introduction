export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            © {year} — Hecho con <span>♥</span> y TypeScript
          </p>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:hola@tudominio.com">Email</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
