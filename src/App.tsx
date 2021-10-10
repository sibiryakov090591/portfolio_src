import React from "react";
import "./App.css";
import Hero from "./blocks/hero/Hero";
import Projects from "./blocks/projects/Projects";
import HireMe from "./blocks/hire-me/HireMe";
import Contacts from "./blocks/contacts/Contacts";
import Footer from "./blocks/footer/Footer";
import Socials from "./components/socials/Socials";
import theme from "./themes";
import { ThemeProvider } from "@material-ui/core";
import Skills from "./blocks/skills/Skills";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Socials />
      <Hero />
      <Skills />
      <Projects />
      <HireMe />
      <Contacts />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
