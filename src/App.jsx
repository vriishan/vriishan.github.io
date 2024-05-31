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
import About from "./components/about/About";
import Experience from "./components/experience/Experience";

const App = () => {
  const portfolioRef = useRef();
  return (
    <div>
      {/* <Cursor /> */}
      <Navbar portfolioRef={portfolioRef}/>
      <Sidebar />
      <section style={{backgroundColor: '#111111', color: '#ffffff'}}>
        <Hero></Hero>        
      </section>
      <About />
      <Skills/>
      <Experience />
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <section id="Contact"><Contact/></section>
    </div>
  );
};

export default App;
