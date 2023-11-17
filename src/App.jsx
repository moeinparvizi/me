// import styles
import "./assets/styles/globals.scss"
import "./app.scss";

// import components
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import { Parallax } from "./Components/parallax/Parallax";

function App() {
  return (
    <div>
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="skills"><Parallax type="skills" /></section>
      <section>skills</section>
      <section id="portfolio"><Parallax type="portfolio" /></section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="contact">Contact</section>
    </div>
  );
}

export default App;
