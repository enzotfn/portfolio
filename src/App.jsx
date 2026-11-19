import './App.css';
import FilmGrain from './components/FilmGrain';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AsciiTransition from './components/AsciiTransition';

export default function App() {
  return (
    <>
      <FilmGrain />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <AsciiTransition variant="blocks" />

        <About />
        <AsciiTransition variant="colonnade" />

        <Resume />
        <AsciiTransition variant="dither" />

        <Skills />
        <AsciiTransition variant="pixel-bayer" />

        <Projects />
        <AsciiTransition variant="signal" />

        <Contact />
      </main>
    </>
  );
}
