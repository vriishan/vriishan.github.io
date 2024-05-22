import "./App.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Cursor from "./components/cursor/Cursor";
import Sidebar from "./components/sidebar/Sidebar"
import { useRef } from "react";

const App = () => {
  const portfolioRef = useRef();
  return (
    <div>
      {/* <Cursor /> */}
      <Navbar portfolioRef={portfolioRef}/>
      <Sidebar />
      <section>
        <Hero></Hero>        
      </section>
      <section id="About">About me</section>
      <section><Parallax type="portfolio"/></section>
      {/* <section id="Skills"><Skills/></section> */}
      <Skills/>
      <section id="Experience">Experience</section>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <section id="Contact"><Contact/></section>
    </div>
  );
};

export default App;