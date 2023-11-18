// import styles
import "./assets/styles/globals.scss"
import "./app.scss";

// import components
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import { Parallax } from "./Components/parallax/Parallax";
import { Skills } from "./Components/skills/Skills";
import { Portfolio } from "./Components/portfolio/Portfolio";
import About from "./Components/about/About";

function App() {
  return (
    <div>
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="skills"><Parallax type="skills" /></section>
      <section><Skills /></section>
      <section id="portfolio"><Parallax type="portfolio" /></section>
      <Portfolio />
      <section id="contact"><About /></section>
    </div>
  );
}

export default App;
