import React from "react";
import { useStyles } from "./styles";
import Title from "../../components/title/Title";
import Project from "../../components/project/Project";
import { Container } from "@material-ui/core";
import mavik_1 from "../../assets/images/projects/MavikPro/Mavik_1.webp";
import mavik_2 from "../../assets/images/projects/MavikPro/Mavik_2.webp";
import mavik_3 from "../../assets/images/projects/MavikPro/Mavik_3.webp";
import chip_1 from "../../assets/images/projects/Chipassist/chipassist_1.webp";
import chip_2 from "../../assets/images/projects/Chipassist/chipassist_2.webp";
import chip_3 from "../../assets/images/projects/Chipassist/chipassist_3.webp";
import requests_1 from "../../assets/images/projects/Requests/requests_1.jpg";
import requests_2 from "../../assets/images/projects/Requests/requests_2.jpg";
import requests_3 from "../../assets/images/projects/Requests/requests_3.jpg";
import dashboard_1 from "../../assets/images/projects/Dashboard/Screenshot_2.jpg";
import dashboard_2 from "../../assets/images/projects/Dashboard/Screenshot_3.jpg";
import dashboard_3 from "../../assets/images/projects/Dashboard/Screenshot_4.jpg";
import pcb_1 from "../../assets/images/projects/PCB/Screenshot_1.jpg";
import pcb_2 from "../../assets/images/projects/PCB/Screenshot_2.jpg";
import pcb_3 from "../../assets/images/projects/PCB/Screenshot_3.jpg";
import { useI18n } from "../../services/I18next";

const Projects: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18n("projects");

  return (
    <section id="projects">
      <Container className={classes.projectsContainer}>
        <Title title={t("menu.projects")} index="03" />
        <div className={classes.projectsWrapper}>
          <Project
            images={[mavik_1, mavik_2, mavik_3]}
            title={t("mavik.title")}
            link="https://sibiryakov090591.github.io/Project-Mavik/src/"
            github="https://github.com/sibiryakov090591/Project-Mavik"
          >
            {t("mavik.text_2")}
            <br />
            <br />
            {t("mavik.text_1")}
          </Project>
          <Project
            images={[chip_1, chip_2, chip_3]}
            title={t("ca.title")}
            link="https://chipassist.andrew-sib.com/"
          >
            {t("ca.text_2")}
            <br />
            <br />
            {t("ca.text_1")}
          </Project>
          <Project
            images={[requests_1, requests_2, requests_3]}
            title={t("requests.title")}
            link="https://requests.chipassist.com/"
          >
            {t("requests.text_2")}
            <br />
            <br />
            {t("requests.text_1")}
          </Project>
          <Project
            images={[dashboard_1, dashboard_2, dashboard_3]}
            title={t("dashboard.title")}
            link="https://main.d38hoihxf751c8.amplifyapp.com/"
            github="https://github.com/sibiryakov090591/management_dashboard"
          >
            {t("dashboard.text_2")}
            <br />
            <br />
            {t("dashboard.text_1")}
          </Project>
          <Project
            images={[pcb_1, pcb_2, pcb_3]}
            title={t("pcb_calc.title")}
            link="https://chipassist.andrew-sib.com/pcb"
          >
            {t("pcb_calc.text_2")}
            <br />
            <br />
            {t("pcb_calc.text_1")}
          </Project>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
