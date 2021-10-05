import React, { useEffect, useRef } from "react";
import { useStyles } from "./styles";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import react_logo from "../../images/skills/1280px-React-icon.svg.png";
import typescript_logo from "../../images/skills/typescript.png";
import sass_logo from "../../images/sass.png";
import gsap_logo from "../../images/gsap.svg";
import api_logo from "../../images/api_rest.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills: React.FC = () => {
  const classes = useStyles();

  const skill_1 = useRef<HTMLDivElement>(null);
  const skill_2 = useRef<HTMLDivElement>(null);
  const skill_3 = useRef<HTMLDivElement>(null);
  const skill_4 = useRef<HTMLDivElement>(null);
  const skill_5 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(skill_1.current, {
      scrollTrigger: skill_1.current,
      y: "20px",
      opacity: 0,
      duration: 0.6,
    });
    gsap.from(skill_2.current, {
      scrollTrigger: skill_2.current,
      y: "20px",
      opacity: 0,
      duration: 0.6,
    });
    gsap.from(skill_3.current, {
      scrollTrigger: skill_3.current,
      y: "20px",
      opacity: 0,
      duration: 0.6,
    });
    gsap.from(skill_4.current, {
      scrollTrigger: skill_4.current,
      y: "20px",
      opacity: 0,
      duration: 0.6,
    });
    gsap.from(skill_5.current, {
      scrollTrigger: skill_5.current,
      y: "20px",
      opacity: 0,
      duration: 0.6,
    });
  });

  return (
    <section className={classes.skills}>
      <Container className={classes.skillsContainer}>
        <Title title="Skills" index="01" />
        <div>
          <div ref={skill_1} className={classes.wrapper}>
            <div className={classes.iconWrapper}>
              <img className={classes.icon} src={react_logo} alt="React.js" />
            </div>
            <p className={classes.description}>
              I often use next technologies: React-Redux for state managing,
              React-Router-Dom for work with routs, Redux-Form and Formik,
              Redux-Thunk for side-effects.
            </p>
          </div>

          <div ref={skill_2} className={classes.wrapper}>
            <div className={classes.iconWrapper}>
              <img
                className={classes.icon}
                src={typescript_logo}
                alt="TypeScript"
              />
            </div>
            <p className={classes.description}>
              I like statically typed languages because there is so much more
              time left to code than fix bugs.
            </p>
          </div>

          <div ref={skill_3} className={classes.wrapper}>
            <div className={classes.iconWrapper}>
              <img className={classes.icon} src={sass_logo} alt="SASS" />
            </div>
            <p className={classes.description}>
              I definitely use sumantic HTML tags, for cross-browser
              compatibility i use normalize.css and and check the browser
              support for the tags used (Hello IE!...) And I really enjoy
              working with animation.
            </p>
          </div>

          <div ref={skill_4} className={classes.wrapper}>
            <div className={classes.iconWrapper}>
              <img className={classes.icon} src={gsap_logo} alt="GSAP" />
            </div>
            <p className={classes.description}>
              I like greensock (GSAP) library for animation. Today I do easy
              animation, but i like this and future i want up level the skill.
            </p>
          </div>

          <div ref={skill_5} className={classes.wrapper}>
            <div className={classes.iconWrapper}>
              <img className={classes.icon} src={api_logo} alt="REST API" />
            </div>
            <p className={classes.description}>
              For HTTP requests (CRUD operations) I like axios library.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
