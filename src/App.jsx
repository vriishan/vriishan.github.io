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
  const heroRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const experienceRef = useRef();
  const contactRef = useRef();

  return (
    <div>
      <Navbar 
        portfolioRef={portfolioRef}
        heroRef={heroRef} 
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
      />
      <Socials />
      <Sidebar 
        portfolioRef={portfolioRef}
        heroRef={heroRef} 
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <div className="padder">
        <section ref={heroRef}>
          <Hero 
            contactRef={contactRef}
            portfolioRef={portfolioRef}
          />
        </section>
        <div ref={aboutRef}>
          <About />
        </div>
      </div>
      <div ref={skillsRef}>
        <Skills/> 
      </div>
      <div className="padder">
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <section ref={contactRef}>
          <Contact/>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
