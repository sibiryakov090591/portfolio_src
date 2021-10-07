import React, { useEffect, useRef } from "react";
import { useStyles } from "./styles";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import react_logo from "../../images/skills/react.png";
import typescript_logo from "../../images/skills/typescript.png";
import sass_logo from "../../images/skills/sass.png";
import gsap_logo from "../../images/skills/gsap.png";
import api_logo from "../../images/skills/api_rest.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const iconAnimation = (ref: any) => {
  gsap.from(ref.current, {
    scrollTrigger: ref.current,
    x: "-25px",
    opacity: 0,
    duration: 1.3,
  });
};

const textAnimation = (ref: any) => {
  gsap.from(ref.current, {
    scrollTrigger: ref.current,
    y: "25px",
    opacity: 0,
    duration: 1.3,
  });
};

const Skills: React.FC = () => {
  const classes = useStyles();

  const skill_1 = useRef<HTMLDivElement>(null);
  const skill_2 = useRef<HTMLDivElement>(null);
  const skill_3 = useRef<HTMLDivElement>(null);
  const skill_4 = useRef<HTMLDivElement>(null);
  const skill_5 = useRef<HTMLDivElement>(null);

  const text_1 = useRef<HTMLDivElement>(null);
  const text_2 = useRef<HTMLDivElement>(null);
  const text_3 = useRef<HTMLDivElement>(null);
  const text_4 = useRef<HTMLDivElement>(null);
  const text_5 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    iconAnimation(skill_1);
    iconAnimation(skill_2);
    iconAnimation(skill_3);
    iconAnimation(skill_4);
    iconAnimation(skill_5);

    textAnimation(text_1);
    textAnimation(text_2);
    textAnimation(text_3);
    textAnimation(text_4);
    textAnimation(text_5);
  });

  return (
    <section className={classes.skills}>
      <Container className={classes.skillsContainer}>
        <Title title="Skills" index="01" />
        <div>
          <div className={classes.wrapper}>
            <div ref={skill_1} className={classes.iconWrapper}>
              <img className={classes.icon} src={react_logo} alt="React.js" />
            </div>
            <p ref={text_1} className={classes.description}>
              I often use next technologies: React-Redux for state managing,
              React-Router-Dom for work with routs, Redux-Form and Formik,
              Redux-Thunk for side-effects.
            </p>
          </div>

          <div className={classes.wrapper}>
            <div ref={skill_2} className={classes.iconWrapper}>
              <img
                className={classes.icon}
                src={typescript_logo}
                alt="TypeScript"
              />
            </div>
            <p ref={text_2} className={classes.description}>
              I like statically typed languages because there is so much more
              time left to code than fix bugs.
            </p>
          </div>

          <div className={classes.wrapper}>
            <div ref={skill_3} className={classes.iconWrapper}>
              <img className={classes.icon} src={sass_logo} alt="SASS" />
            </div>
            <p ref={text_3} className={classes.description}>
              I definitely use sumantic HTML tags, for cross-browser
              compatibility i use normalize.css and and check the browser
              support for the tags used (Hello IE!...) And I really enjoy
              working with animation.
            </p>
          </div>

          <div className={classes.wrapper}>
            <div ref={skill_4} className={classes.iconWrapper}>
              <img className={classes.icon} src={gsap_logo} alt="GSAP" />
            </div>
            <p ref={text_4} className={classes.description}>
              I like greensock (GSAP) library for animation. Today I do easy
              animation, but i like this and future i want up level the skill.
            </p>
          </div>

          <div className={classes.wrapper}>
            <div ref={skill_5} className={classes.iconWrapper}>
              <img className={classes.icon} src={api_logo} alt="REST API" />
            </div>
            <p ref={text_5} className={classes.description}>
              For HTTP requests (CRUD operations) I like axios library.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
