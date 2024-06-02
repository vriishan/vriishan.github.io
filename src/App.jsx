import "./App.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Sidebar from "./components/sidebar/Sidebar"
import { useRef } from "react";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Socials from "./components/socials/Socials";

const App = () => {
  const portfolioRef = useRef();
  return (
    <div>
      {/* <Cursor /> */}
      <Navbar portfolioRef={portfolioRef}/>
      <Socials />
      <Sidebar />
      <section style={{backgroundColor: 'var(--background)', color: 'var(--text)'}}>
        <Hero></Hero>        
      </section>
      <About />
      <Skills/>
      <Experience />
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <section id="Contact"><Contact/></section>
      <Footer/>
    </div>
  );
};

export default App;
