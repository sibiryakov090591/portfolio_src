import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./blocks/hero/Hero";
import HireMe from "./blocks/hire-me/HireMe";
import Contacts from "./blocks/contacts/Contacts";
import Footer from "./blocks/footer/Footer";
import Skills from "./blocks/skills/Skills";
import Menu from "./components/menu/Menu";
import About from "./blocks/about-me/About";
import Socials from "./components/socials/Socials";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Projects from "./blocks/projects/Projects";

function App() {
  const theme = useTheme();
  const hideSocials = useMediaQuery(theme.breakpoints.down(1400));

  return (
    <React.Fragment>
      <Menu />
      {!hideSocials && <Socials />}
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
