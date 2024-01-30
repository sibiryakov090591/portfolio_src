import React, { useEffect } from "react";
import { useStyles } from "./styles";
import in_icon from "../../assets/images/footer/linkedin.svg";
import github_icon from "../../assets/images/footer/github_hover.svg";
import inst_icon from "../../assets/images/footer/instagram.svg";
import email_icon from "../../assets/images/footer/email.svg";
import wars_icon from "../../assets/images/footer/wars.svg";
import { gsap } from "gsap";
import useAppTheme from "../../themes/ThemeStyles";
import BlankLink from "../menu/BlankLink/BlankLink";

const Socials: React.FC = () => {
  const classes = useStyles();
  const appTheme = useAppTheme();

  useEffect(() => {
    gsap.from("#social_element", {
      delay: 1,
      stagger: 0.15,
      ease: "elastic.out(0.6, 0.2)",
      x: "-80px",
      duration: 2,
    });
    gsap.from("#social_line", {
      delay: 3,
      ease: "circ.out",
      y: "100px",
      duration: 0.6,
    });
  }, []);

  return (
    <div className={classes.wrapper}>
      <nav>
        <div id="social_element" className={classes.imgWrapper}>
          <BlankLink
            className={appTheme.link}
            href="https://www.linkedin.com/in/andrew-sibiriakov-6a54941b2"
          >
            <img className={classes.img} src={in_icon} alt="linked in" />
          </BlankLink>
        </div>
        <div id="social_element" className={classes.imgWrapper}>
          <BlankLink
            className={appTheme.link}
            href="https://github.com/sibiryakov090591"
          >
            <img className={classes.img} src={github_icon} alt="github" />
          </BlankLink>
        </div>
        <div id="social_element" className={classes.imgWrapper}>
          <BlankLink
            className={appTheme.link}
            href="https://www.codewars.com/users/AndreySibiryakov"
          >
            <img className={classes.img} src={wars_icon} alt="code wars" />
          </BlankLink>
        </div>
        <div id="social_element" className={classes.imgWrapper}>
          <BlankLink
            className={appTheme.link}
            href="https://www.instagram.com/andrewsib/"
          >
            <img className={classes.img} src={inst_icon} alt="instagram" />
          </BlankLink>
        </div>
        <div id="social_element" className={classes.imgWrapper}>
          <a
            className={appTheme.link}
            href="mailto:andrey.sibiriakov@gmail.com"
          >
            <img className={classes.img} src={email_icon} alt="send mail" />
          </a>
        </div>
        <div id="social_line" className={classes.line}></div>
      </nav>
    </div>
  );
};

export default Socials;
