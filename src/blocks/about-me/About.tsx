import React, { useEffect } from "react";
import { useStyles } from "./styles";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "../../services/I18next";
import SettingsIcon from "../../assets/images/icons/SettingsIcon/SettingsIcon";

const About: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18n("about");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  return (
    <section id="about">
      <Container className={classes.container}>
        <Title title={t("menu.about")} index="01" />
        <div className={classes.content}>
          <SettingsIcon className={classes.settingsIcon} />
          <p>{t("text_1")}</p>
          <p>{t("text_2")}</p>
          <p>{t("text_3")}</p>
        </div>
      </Container>
    </section>
  );
};

export default About;
