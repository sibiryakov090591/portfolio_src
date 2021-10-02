import React from "react";
import { useStyles } from "./styles";
import Title from "../../components/title/Title";
import Project from "../../components/project/Project";
import { Container } from "@material-ui/core";
import mavik_1 from "../../images/projects/MavikPro/Mavik_1.jpg";
import mavik_2 from "../../images/projects/MavikPro/Mavik_2.jpg";
import mavik_3 from "../../images/projects/MavikPro/Mavik_3.jpg";
import chip_1 from "../../images/projects/Chipassist/chipassist_1.jpg";
import chip_2 from "../../images/projects/Chipassist/chipassist_2.jpg";
import chip_3 from "../../images/projects/Chipassist/chipassist_3.jpg";

const Projects: React.FC = () => {
  const classes = useStyles();

  return (
    <section className={classes.projects}>
      <Container className={classes.projectsContainer}>
        <Title title="Works" index="02" />
        <div className={classes.projectsWrapper}>
          <Project
            images={[mavik_1, mavik_2, , mavik_3]}
            title="Mavik Pro Landing"
            link="https://sibiryakov090591.github.io/Project-Mavik/src/"
          >
            What tools were used: HTML / SASS, JavaScript, Slick-slider, GSAP
            for animation, PHPMailer.
            <br />
            <br />
            This is a landing page with a small animation on the greensock
            library.
          </Project>
          <Project
            images={[chip_1, chip_2, chip_3]}
            title="ChipAssist marketplace"
            link="https://prod.chipassist.com/"
          >
            What tools were used: React, Material, I18n, React Hook Form, Rest
            API, Html2Canvas.
            <br />
            <br />
            This is a chip marketplace commercial project, team development.
          </Project>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
