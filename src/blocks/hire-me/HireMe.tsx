import React, { useEffect, useRef } from "react";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import { useStyles } from "./styles";
import { Box } from "@material-ui/core";
// @ts-ignore
import resumeEn from "./resume/andrey-sibiriakov-resume-eng.pdf";
// @ts-ignore
import resumeRu from "./resume/andrey-sibiriakov-resume-ru.pdf";
import resumeImg_en from "../../images/resume.jpg";
import resumeImg_ru from "../../images/resume_ru.jpg";
import lang_en from "../../images/lang_en.svg";
import lang_ru from "../../images/lang_ru.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "../../services/I18next";

const HireMe: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18n("menu");

  const elem_1 = useRef<HTMLDivElement>(null);
  const elem_2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(elem_1.current, {
      scrollTrigger: {
        trigger: elem_1.current,
        start: "top 70%",
      },
      opacity: 0,
      duration: 0.6,
    });
    gsap.from(elem_2.current, {
      scrollTrigger: {
        trigger: elem_2.current,
        start: "top 70%",
      },
      opacity: 0,
      delay: 0.5,
      duration: 0.6,
    });
  }, []);

  return (
    <section id="resume" className={classes.hire}>
      <Container className={classes.hireContainer}>
        <Title title={t("resume")} index="03" />

        <Box className={classes.wrapper}>
          <div ref={elem_1} className={classes.resumeItemWrapper}>
            <a
              href={resumeEn}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.resumeImgWrapper}
            >
              <img
                className={classes.resumeImg}
                src={resumeImg_en}
                alt="resume_en"
              />
              <img className={classes.langIcon} src={lang_en} alt="lang_icon" />
            </a>
          </div>
          <div ref={elem_2} className={classes.resumeItemWrapper}>
            <a
              href={resumeRu}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.resumeImgWrapper}
            >
              <img
                className={classes.resumeImg}
                src={resumeImg_ru}
                alt="resume_ru"
              />
              <img className={classes.langIcon} src={lang_ru} alt="lang_icon" />
            </a>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default HireMe;
