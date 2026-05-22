import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollAnimations, useScrollProgress, useCustomCursor } from './hooks/useScrollAnimations';

function App() {
  useScrollAnimations();
  useScrollProgress();
  useCustomCursor();

  return (
    <div className="noise">
      {/* Scroll progress bar */}
      <div className="scroll-progress" aria-hidden="true" />

      {/* Custom cursor */}
      <div className="cursor" aria-hidden="true" />

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
