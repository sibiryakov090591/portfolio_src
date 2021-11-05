import React, { useEffect } from "react";
import "./App.css";
import Hero from "./blocks/hero/Hero";
import Projects from "./blocks/projects/Projects";
import HireMe from "./blocks/hire-me/HireMe";
import Contacts from "./blocks/contacts/Contacts";
import Footer from "./blocks/footer/Footer";
import theme from "./themes";
import { ThemeProvider } from "@material-ui/core";
import Skills from "./blocks/skills/Skills";
import Menu from "./components/menu/Menu";

function App() {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <main id="main">
        <Hero />
        <Skills />
        <Projects />
        <HireMe />
        <Contacts />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
