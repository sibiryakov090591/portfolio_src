import React, { useEffect } from "react";
import { useStyles } from "./styles";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "../../services/I18next";
import about from "../../images/about.jpg";
import video from "../../images/video.mp4";

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
        <div className={classes.wrapper}>
          <div className={classes.content}>{t("text")}</div>
          <div className={classes.image}>
            <video autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
            {/*<img src={about} alt="about" />*/}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
