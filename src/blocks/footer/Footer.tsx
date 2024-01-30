import React from "react";
import { Container } from "@material-ui/core";
import { useStyles } from "./styles";
import in_icon from "../../assets/images/footer/linkedin.svg";
import github_icon from "../../assets/images/footer/github_hover.svg";
import inst_icon from "../../assets/images/footer/instagram.svg";
import email_icon from "../../assets/images/footer/email.svg";
import wars_icon from "../../assets/images/footer/wars.svg";
import { Hidden } from "@material-ui/core";

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.footerContainer}>
        <Hidden mdUp>
          <div className={classes.socialsWrapper}>
            <div className={classes.imgWrapper}>
              <a
                href="https://www.linkedin.com/in/andrey-sibiriakov-6a54941b2"
                target="_blank"
              >
                <img className={classes.img} src={in_icon} alt="linked in" />
              </a>
            </div>
            <div className={classes.imgWrapper}>
              <a href="https://github.com/sibiryakov090591" target="_blank">
                <img className={classes.img} src={github_icon} alt="github" />
              </a>
            </div>
            <div className={classes.imgWrapper}>
              <a
                href="https://www.codewars.com/users/AndreySibiryakov"
                target="_blank"
              >
                <img className={classes.img} src={wars_icon} alt="code wars" />
              </a>
            </div>
            <div className={classes.imgWrapper}>
              <a
                href="https://www.instagram.com/sibiryakov_bro/"
                target="_blank"
              >
                <img className={classes.img} src={inst_icon} alt="instagram" />
              </a>
            </div>
            <div className={classes.imgWrapper}>
              <a href="mailto:sibiryakow91@gmail.com" target="_blank">
                <img className={classes.img} src={email_icon} alt="send mail" />
              </a>
            </div>
          </div>
        </Hidden>
        <div>© {new Date().getFullYear()} Andrew Sibiriakov.</div>
      </Container>
    </footer>
  );
};

export default Footer;
