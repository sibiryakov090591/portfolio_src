import React from "react";
import "./App.css";
import Hero from "./blocks/hero/Hero";
import Projects from "./blocks/projects/Projects";
import HireMe from "./blocks/hire-me/HireMe";
import Contacts from "./blocks/contacts/Contacts";
import Footer from "./blocks/footer/Footer";
import Skills from "./blocks/skills/Skills";
import Menu from "./components/menu/Menu";
import About from "./blocks/about-me/About";
import Socials from "./components/socials/Socials";
import { Hidden } from "@material-ui/core";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Hidden smDown>
        <Socials />
      </Hidden>
      <main id="main">
        <Hero />
        <About />
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
