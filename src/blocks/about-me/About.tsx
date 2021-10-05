import React, { useEffect, useRef } from "react";
import { useStyles } from "./styles";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About: React.FC = () => {
  const classes = useStyles();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  return (
    <section className={classes.skills}>
      <Container className={classes.skillsContainer}>
        <Title title="About Me" index="01" />
        <div className={classes.skillsWrapper}>wreqwr</div>
      </Container>
    </section>
  );
};

export default About;
