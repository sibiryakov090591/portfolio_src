import React, { useEffect, useRef } from "react";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import { useStyles } from "./styles";
import resumeEn from "./resume/Andrew_Sibiriakov_resume.pdf";
import resumeImg_en from "../../assets/images/resume.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "../../services/I18next";
import BlankLink from "../../components/menu/BlankLink/BlankLink";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";

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
    <section id="resume">
      <Container className={classes.hireContainer}>
        <Title title={t("resume")} index="04" />

        <BlankLink
          rel="noopener noreferrer"
          href={resumeEn}
          className={classes.wrapper}
        >
          <div ref={elem_1} className={classes.resumeItemWrapper}>
            <div className={`${classes.resumeImgWrapper} img_wrapper`}>
              <img
                className={classes.resumeImg}
                src={resumeImg_en}
                alt="resume_en"
              />
            </div>
            <div className={classes.content}>
              View and download the resume (CV) in PDF format.
              <AspectRatioIcon className={classes.icon} />
            </div>
          </div>
        </BlankLink>
      </Container>
    </section>
  );
};

export default HireMe;
