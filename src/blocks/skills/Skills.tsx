import React from "react";
import { useStyles } from "./styles";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import react_logo from "../../assets/images/skills/react.png";
import typescript_logo from "../../assets/images/skills/typescript.png";
import sass_logo from "../../assets/images/skills/sass.png";
import gsap_logo from "../../assets/images/skills/gsap.png";
import api_logo from "../../assets/images/skills/api_rest.png";
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
            <Marquee>
              <Skill icon={react_logo}>React</Skill>
              <Skill icon={typescript_logo}>TypeScript</Skill>
              <Skill icon={sass_logo}>SASS</Skill>
              <Skill icon={gsap_logo}>GreenSock</Skill>
              <Skill icon={api_logo}>RESTful APIs</Skill>
            </Marquee>
          </div>
          <div style={{ width: "100%", marginTop: 24 }}>
            <Marquee direction="right">
              <Skill icon={react_logo}>React</Skill>
              <Skill icon={typescript_logo}>TypeScript</Skill>
              <Skill icon={sass_logo}>SASS</Skill>
              <Skill icon={gsap_logo}>GreenSock</Skill>
              <Skill icon={api_logo}>RESTful APIs</Skill>
            </Marquee>
          </div>
          <div className={classes.border} style={{ left: "100%" }} />
        </div>
      </Container>
    </section>
  );
};

export default Skills;
