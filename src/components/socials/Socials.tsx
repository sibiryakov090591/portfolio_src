import React, { useEffect } from "react";
import { useStyles } from "./styles";
import in_icon from "../../images/footer/linkedin.svg";
import github_icon from "../../images/footer/github_hover.svg";
import inst_icon from "../../images/footer/instagram.svg";
import email_icon from "../../images/footer/email.svg";
import wars_icon from "../../images/footer/wars.svg";
import { gsap } from "gsap";
import useAppTheme from "../../themes/ThemeStyles";

const Socials: React.FC = () => {
  const classes = useStyles();
  const appTheme = useAppTheme();

  useEffect(() => {
    gsap.from("#social_element", {
      stagger: 0.15,
      ease: "elastic.out(1, 0.3)",
      x: "-80px",
      duration: 2,
    });
    gsap.from("#social_line", {
      delay: 1.6,
      ease: "circ.out",
      y: "100px",
      duration: 0.6,
    });
  }, []);

  return (
    <div className={classes.wrapper}>
      <nav>
        <div id="social_element" className={classes.imgWrapper}>
          <a
            className={appTheme.link}
            href="https://www.linkedin.com/in/andrew-sibiriakov-6a54941b2"
            target="_blank"
          >
            <img className={classes.img} src={in_icon} alt="linked in" />
          </a>
        </div>
        <div id="social_element" className={classes.imgWrapper}>
          <a
            className={appTheme.link}
            href="https://github.com/sibiryakov090591"
            target="_blank"
          >
            <img className={classes.img} src={github_icon} alt="github" />
          </a>
        </div>
        <div id="social_element" className={classes.imgWrapper}>
          <a
            className={appTheme.link}
            href="https://www.codewars.com/users/AndreySibiryakov"
            target="_blank"
          >
            <img className={classes.img} src={wars_icon} alt="code wars" />
          </a>
        </div>
        <div id="social_element" className={classes.imgWrapper}>
          <a
            className={appTheme.link}
            href="https://www.instagram.com/andrewsib/"
            target="_blank"
          >
            <img className={classes.img} src={inst_icon} alt="instagram" />
          </a>
        </div>
        <div id="social_element" className={classes.imgWrapper}>
          <a
            className={appTheme.link}
            href="mailto:andrey.sibiriakov@gmail.com"
            target="_blank"
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
