import "./App.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Cursor from "./components/cursor/Cursor";
import Sidebar from "./components/sidebar/Sidebar"

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <section>
        <Hero></Hero>        
      </section>
      <section id="Home">Home</section>
      <section id="About"><Parallax type="portfolio"/></section>
      <section id="Skills"><Skills /></section>
      <section id="Experience">Experience</section>
      <section id="Projects"></section>
      { /* section */ }
        <Portfolio />
      { /* section */ }
      <section id="Contact"><Contact /></section>
    </div>
  );
};

export default App;
