import React, { useEffect, useRef } from "react";
import { useStyles } from "./styles";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "../../services/I18next";
import SettingsIcon from "../../assets/images/icons/SettingsIcon/SettingsIcon";
import TextPlugin from "gsap/TextPlugin";

const About: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18n("about");

  const elemRef_1 = useRef<HTMLDivElement>(null);
  const elemRef_2 = useRef<HTMLDivElement>(null);
  const elemRef_3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elemRef_1.current,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
    tl.to(elemRef_1.current, {
      text: `${t("text_1")}`,
      duration: 1,
      delay: 1,
    });
    tl.to(elemRef_2.current, {
      text: `${t("text_2")}`,
      duration: 1,
      delay: 0.5,
    });
    tl.to(elemRef_3.current, {
      text: `${t("text_3")}`,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  const scrambleTextToNumbers = (input: string) => {
    return (
      input.slice(0, 35).replace(/[a-zA-Z]/g, () => {
        return Math.floor(Math.random() * 10).toString();
      }) + " // Enter code ⏎"
    );
  };

  return (
    <section id="about">
      <Container className={classes.container}>
        <Title title={t("menu.about")} index="01" />
        <div className={classes.content}>
          <SettingsIcon className={classes.settingsIcon} />
          <p ref={elemRef_1}>{scrambleTextToNumbers(t("text_1"))}</p>
          <p ref={elemRef_2}>{scrambleTextToNumbers(t("text_2"))}</p>
          <p ref={elemRef_3}>{scrambleTextToNumbers(t("text_3"))}</p>
        </div>
      </Container>
    </section>
  );
};

export default React.memo(About);
