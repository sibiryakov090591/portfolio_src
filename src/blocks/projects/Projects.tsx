import React from "react";
import { useStyles } from "./styles";
import Title from "../../components/title/Title";
import Project from "../../components/project/Project";
import { Container } from "@material-ui/core";
import mavik_1 from "../../images/projects/MavikPro/Mavik_1.webp";
import mavik_2 from "../../images/projects/MavikPro/Mavik_2.webp";
import mavik_3 from "../../images/projects/MavikPro/Mavik_3.webp";
import chip_1 from "../../images/projects/Chipassist/chipassist_1.webp";
import chip_2 from "../../images/projects/Chipassist/chipassist_2.webp";
import chip_3 from "../../images/projects/Chipassist/chipassist_3.webp";
import { useI18n } from "../../services/I18next";

const Projects: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18n("projects");

  return (
    <section id="projects" className={classes.projects}>
      <Container className={classes.projectsContainer}>
        <Title title={t("menu.projects")} index="02" />
        <div className={classes.projectsWrapper}>
          <Project
            images={[mavik_1, mavik_2, , mavik_3]}
            title={t("mavik.title")}
            link="https://sibiryakov090591.github.io/Project-Mavik/src/"
          >
            {t("mavik.text_1")}
            <br />
            <br />
            {t("mavik.text_2")}
          </Project>
          <Project
            images={[chip_1, chip_2, chip_3]}
            title={t("ca.title")}
            link="https://prod.chipassist.com/"
          >
            {t("ca.text_1")}
            <br />
            <br />
            {t("ca.text_2")}
          </Project>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
