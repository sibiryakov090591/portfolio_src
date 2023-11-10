import React, { useEffect, useRef } from "react";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import { useStyles } from "./styles";
import { Box } from "@material-ui/core";
// @ts-ignore
import resumeEn from "./resume/andrew-sibiriakov-resume-eng.pdf";
// @ts-ignore
import resumeRu from "./resume/andrew-sibiriakov-resume-ru.pdf";
import resumeImg_en from "../../images/resume.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "../../services/I18next";

const HireMe: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18n("menu");

  const elem_1 = useRef<HTMLDivElement>(null);

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
            </a>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default HireMe;
