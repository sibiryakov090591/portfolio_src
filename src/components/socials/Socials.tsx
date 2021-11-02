import React from "react";
import { useStyles } from "./styles";
import in_icon from "../../images/footer/linkedin.svg";
import github_icon from "../../images/footer/github.svg";
import inst_icon from "../../images/footer/instagram.svg";

const Socials: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <nav>
        <div className={classes.imgWrapper}>
          <a href="https://www.instagram.com/sibiryakov_bro/">
            <img className={classes.img} src={in_icon} alt="social_icon_in" />
          </a>
        </div>
        <div className={classes.imgWrapper}>
          <a href="https://github.com/sibiryakov090591">
            <img
              className={classes.img}
              src={github_icon}
              alt="social_icon_github"
            />
          </a>
        </div>
        <div className={classes.imgWrapper}>
          <a href="https://www.linkedin.com/in/andrey-sibiriakov-6a54941b2">
            <img
              className={classes.img}
              src={inst_icon}
              alt="social_icon_instagram"
            />
          </a>
        </div>
        <div className={classes.line}></div>
      </nav>
    </div>
  );
};

export default Socials;
