// import styles
import "./assets/styles/globals.scss"
import "./app.scss";

// import components
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section id="homepage">Parallax</section>
      <section id="services">Services</section>
      <section id="portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="contact">Contact</section>
    </div>
  );
}

export default App;
