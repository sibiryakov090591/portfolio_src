import React, { useEffect } from "react";
import "./App.css";
import Hero from "./blocks/hero/Hero";
import Projects from "./blocks/projects/Projects";
import HireMe from "./blocks/hire-me/HireMe";
import Contacts from "./blocks/contacts/Contacts";
import Footer from "./blocks/footer/Footer";
import Skills from "./blocks/skills/Skills";
import Menu from "./components/menu/Menu";
import * as Scroll from "react-scroll";

function App() {
  useEffect(() => {
    const scroll = Scroll.animateScroll;
    scroll.scrollToTop({ duration: 0 });
  }, []);

  return (
    <React.Fragment>
      <Menu />
      <main id="main">
        <Hero />
        <Skills />
        <Projects />
        <HireMe />
        <Contacts />
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default App;
