import React from "react";
import { useStyles } from "./styles";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import react_logo from "../../assets/images/skills/react.png";
import typescript_logo from "../../assets/images/skills/typescript.png";
import sass_logo from "../../assets/images/skills/sass.png";
import gsap_logo from "../../assets/images/skills/gsap.png";
import api_logo from "../../assets/images/skills/api_rest.png";
import atlassian from "../../assets/images/skills/atlassian.png";
import axios from "../../assets/images/skills/axios.png";
import bootstrap from "../../assets/images/skills/bootstrap.png";
import css from "../../assets/images/skills/css.png";
import docker from "../../assets/images/skills/docker.png";
import git from "../../assets/images/skills/git.png";
import github from "../../assets/images/skills/github.png";
import gitlab from "../../assets/images/skills/gitlab.png";
import html from "../../assets/images/skills/html.png";
import javascript from "../../assets/images/skills/javascript.png";
import jest from "../../assets/images/skills/jest.png";
import mongodb from "../../assets/images/skills/mongodb.png";
import mui from "../../assets/images/skills/mui.png";
import next from "../../assets/images/skills/next.png";
import node from "../../assets/images/skills/node.png";
import npm from "../../assets/images/skills/npm.png";
import redux from "../../assets/images/skills/redux.png";
import sentry from "../../assets/images/skills/sentry.png";
import storybook from "../../assets/images/skills/storybook.png";
import tailwind from "../../assets/images/skills/tailwind.png";
import vite from "../../assets/images/skills/vite.png";
import webpack from "../../assets/images/skills/webpack.png";
import express from "../../assets/images/skills/express.png";
import { useI18n } from "../../services/I18next";
import Skill from "../../components/skill/Skill";
import Marquee from "react-fast-marquee";

const Skills: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18n("skills");

  return (
    <section id="skills">
      <Container className={classes.skillsContainer}>
        <Title title={t("menu.skills")} index="02" />
        <div className={classes.marqueeWrapper}>
          <div className={classes.border} style={{ right: "100%" }} />
          <div style={{ width: "100%" }}>
            <Marquee direction="left" speed={40}>
              <Skill icon={javascript}>JavaScript</Skill>
              <Skill icon={typescript_logo}>TypeScript</Skill>
              <Skill icon={react_logo}>React</Skill>
              <Skill icon={next}>Next</Skill>
              <Skill icon={redux}>Redux</Skill>
              <Skill icon={node}>Node</Skill>
              <Skill icon={express}>Express</Skill>
              <Skill icon={mongodb}>MongoDB</Skill>
              <Skill icon={webpack}>Webpack</Skill>
              <Skill icon={vite}>Vite</Skill>
              <Skill icon={axios}>Axios</Skill>
              <Skill icon={npm}>NPM</Skill>
              <Skill icon={storybook}>Storybook</Skill>
              <Skill icon={sass_logo}>SASS</Skill>
            </Marquee>
          </div>
          <div style={{ width: "100%", marginTop: 24 }}>
            <Marquee direction="left" speed={50}>
              <Skill icon={atlassian}>Atlassian</Skill>
              <Skill icon={github}>GitHub</Skill>
              <Skill icon={api_logo}>RESTful APIs</Skill>
              <Skill icon={gitlab}>GitLab</Skill>
              <Skill icon={git}>Git</Skill>
              <Skill icon={docker}>Docker</Skill>
              <Skill icon={bootstrap}>Bootstrap</Skill>
              <Skill icon={mui}>MUI</Skill>
              <Skill icon={tailwind}>Tailwind</Skill>
              <Skill icon={jest}>Jest</Skill>
              <Skill icon={sentry}>Sentry</Skill>
              <Skill icon={html}>HTML</Skill>
              <Skill icon={css}>CSS</Skill>
              <Skill icon={gsap_logo}>GreenSock</Skill>
            </Marquee>
          </div>
          <div className={classes.border} style={{ left: "100%" }} />
        </div>
      </Container>
    </section>
  );
};

export default Skills;
