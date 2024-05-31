import React from "react";
import "./App.css";
import Hero from "./blocks/hero/Hero";
import ProjectsV2 from "./blocks/projectsV2/Projects";
import Projects from "./blocks/projects/Projects";
import HireMe from "./blocks/hire-me/HireMe";
import Contacts from "./blocks/contacts/Contacts";
import Footer from "./blocks/footer/Footer";
import Skills from "./blocks/skills/Skills";
import Menu from "./components/menu/Menu";
import About from "./blocks/about-me/About";
import Socials from "./components/socials/Socials";
import { Hidden, useMediaQuery, useTheme } from "@material-ui/core";

function App() {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

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
        {isMdDown ? <Projects /> : <ProjectsV2 />}
        <HireMe />
        <Contacts />
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default App;
