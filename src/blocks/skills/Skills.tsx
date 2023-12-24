import React, { useEffect } from "react";
import { useStyles } from "./styles";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import react_logo from "../../images/skills/react.png";
import typescript_logo from "../../images/skills/typescript.png";
import sass_logo from "../../images/skills/sass.png";
import gsap_logo from "../../images/skills/gsap.png";
import api_logo from "../../images/skills/api_rest.png";
import { useI18n } from "../../services/I18next";
import Skill from "../../components/skill/Skill";

const Skills: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18n("skills");

  return (
    <section id="skills">
      <Container className={classes.skillsContainer}>
        <Title title={t("menu.skills")} index="02" />
        <div>
          <Skill icon={react_logo}>{t("react")}</Skill>
          <Skill icon={typescript_logo}>{t("ts")}</Skill>
          <Skill icon={sass_logo}>{t("sass")}</Skill>
          <Skill icon={gsap_logo}>{t("gsap")}</Skill>
          <Skill icon={api_logo}>{t("rest")}</Skill>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
