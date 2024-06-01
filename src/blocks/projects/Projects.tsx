import React from "react";
import { useStyles } from "./styles";
import Title from "../../components/title/Title";
import mavik_1 from "../../assets/images/projects/MavikPro/Mavik_1.jpg";
import mavik_2 from "../../assets/images/projects/MavikPro/Mavik_2.jpg";
import mavik_3 from "../../assets/images/projects/MavikPro/Mavik_3.jpg";
import chip_1 from "../../assets/images/projects/Chipassist/market_1.jpg";
import chip_2 from "../../assets/images/projects/Chipassist/market_2.jpg";
import chip_3 from "../../assets/images/projects/Chipassist/market_3.jpg";
import requests_1 from "../../assets/images/projects/Requests/requests_1.jpg";
import requests_2 from "../../assets/images/projects/Requests/requests_2.jpg";
import requests_3 from "../../assets/images/projects/Requests/requests_3.jpg";
import dashboard_1 from "../../assets/images/projects/Dashboard/dashboard_1.jpg";
import dashboard_2 from "../../assets/images/projects/Dashboard/dashboard_2.jpg";
import dashboard_3 from "../../assets/images/projects/Dashboard/dashboard_3.jpg";
import pcb_1 from "../../assets/images/projects/PCB/pcb_1.jpg";
import pcb_2 from "../../assets/images/projects/PCB/pcb_2.jpg";
import pcb_3 from "../../assets/images/projects/PCB/pcb_3.jpg";
import { useI18n } from "../../services/I18next";
import Project from "./projectDesktop/Project";
import ProjectCard from "./projectCard/ProjectCard";
import { useMediaQuery, useTheme } from "@material-ui/core";

const Projects: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18n("projects");

  const theme = useTheme();
  const isShowProductCards = useMediaQuery(theme.breakpoints.down(1100));

  const data = [
    {
      images: [chip_1, chip_2, chip_3],
      title: t("ca.title"),
      text: t("ca.text_2"),
      link: "https://chipassist.andrew-sib.com/",
      github: "https://github.com/sibiryakov090591/chipassist",
    },
    {
      images: [requests_1, requests_2, requests_3],
      title: t("requests.title"),
      text: t("requests.text_2"),
      link: "https://requests.chipassist.com/",
      github: "https://github.com/sibiryakov090591/chipassist",
    },
    {
      images: [mavik_1, mavik_2, mavik_3],
      title: t("mavik.title"),
      text: t("mavik.text_2"),
      link: "https://sibiryakov090591.github.io/Project-Mavik/src/",
      github: "https://github.com/sibiryakov090591/Project-Mavik",
    },
    {
      images: [dashboard_1, dashboard_2, dashboard_3],
      title: t("dashboard.title"),
      text: t("dashboard.text_2"),
      link: "https://main.d38hoihxf751c8.amplifyapp.com/",
      github: "https://github.com/sibiryakov090591/management_dashboard",
    },
    {
      images: [pcb_1, pcb_2, pcb_3],
      title: t("pcb_calc.title"),
      text: t("pcb_calc.text_2"),
      link: "https://chipassist.andrew-sib.com/pcb",
      github: "https://github.com/sibiryakov090591/chipassist",
    },
  ];

  return (
    <section id="projects" className={classes.projects}>
      <Title title={t("menu.projects")} index="03" />
      <div className={classes.projectsWrapper}>
        {data.map((item, index) => {
          return isShowProductCards ? (
            <ProjectCard
              key={index}
              images={item.images}
              title={item.title}
              text={item.text}
              link={item.link}
              github={item.github}
            />
          ) : (
            <Project
              key={index}
              images={item.images}
              title={item.title}
              text={item.text}
              link={item.link}
              github={item.github}
              isReverse={index % 2 === 0}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
