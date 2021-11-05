import React from "react";
import { Container } from "@material-ui/core";
import { useStyles } from "./styles";
import in_icon from "../../images/footer/linkedin.svg";
import github_icon from "../../images/footer/github_hover.svg";
import inst_icon from "../../images/footer/instagram.svg";
import email_icon from "../../images/footer/email.svg";
import Socials from "../../components/socials/Socials";
import { Hidden } from "@material-ui/core";

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.footerContainer}>
        <Hidden smDown>
          <Socials />
        </Hidden>
        <Hidden mdUp>
          <div className={classes.socialsWrapper}>
            <div className={classes.imgWrapper}>
              <a
                href="https://www.linkedin.com/in/andrey-sibiriakov-6a54941b2"
                target="_blank"
              >
                <img className={classes.img} src={in_icon} alt="social_icon" />
              </a>
            </div>
            <div className={classes.imgWrapper}>
              <a href="https://github.com/sibiryakov090591" target="_blank">
                <img
                  className={classes.img}
                  src={github_icon}
                  alt="social_icon"
                />
              </a>
            </div>
            <div className={classes.imgWrapper}>
              <a
                href="https://www.instagram.com/sibiryakov_bro/"
                target="_blank"
              >
                <img
                  className={classes.img}
                  src={inst_icon}
                  alt="social_icon"
                />
              </a>
            </div>
            <div className={classes.imgWrapper}>
              <a href="mailto:sibiryakow91@gmail.com" target="_blank">
                <img
                  className={classes.img}
                  src={email_icon}
                  alt="social_icon"
                />
              </a>
            </div>
          </div>
        </Hidden>
        <div>© 2021 Copyright.</div>
      </Container>
    </footer>
  );
};

export default Footer;
