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

function App() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoaded(true), 4000);
  }, []);

  return (
    <React.Fragment>
      <Menu />
      <main id="main">
        <Hero />
        {loaded && (
          <>
            <About />
            <Skills />
            <Projects />
            <HireMe />
            <Contacts />
            <Footer />
          </>
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
