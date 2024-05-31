import React from "react";
import { Container, Hidden } from "@material-ui/core";
import { useStyles } from "./styles";
import in_icon from "../../assets/images/footer/linkedin.svg";
import github_icon from "../../assets/images/footer/github_hover.svg";
import inst_icon from "../../assets/images/footer/instagram.svg";
import email_icon from "../../assets/images/footer/email.svg";
import wars_icon from "../../assets/images/footer/wars.svg";
import NavLink from "../../components/menu/NavLink/NavLink";
import { useI18n } from "../../services/I18next";

const Footer: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18n("menu");

  return (
    <footer className={classes.footer}>
      <Container className={classes.footerContainer}>
        <nav>
          <ul className={classes.list}>
            <NavLink
              to="about"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={classes.item}
            >
              <li>{t("about")}</li>
            </NavLink>
            <NavLink
              to="skills"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={classes.item}
            >
              <li>{t("skills")}</li>
            </NavLink>
            <NavLink
              to="projects"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={classes.item}
            >
              <li>{t("projects")}</li>
            </NavLink>
            <NavLink
              to="resume"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={classes.item}
            >
              <li>{t("resume")}</li>
            </NavLink>
            <NavLink
              to="contact"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={classes.item}
            >
              <li>{t("text_me")}</li>
            </NavLink>
          </ul>
        </nav>
        <div className={classes.socialsWrapper}>
          <div className={classes.imgWrapper}>
            <a
              href="https://www.linkedin.com/in/andrey-sibiriakov-6a54941b2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.img} src={in_icon} alt="linked in" />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a
              href="https://github.com/sibiryakov090591"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.img} src={github_icon} alt="github" />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a
              href="https://www.codewars.com/users/AndreySibiryakov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.img} src={wars_icon} alt="code wars" />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a
              href="https://www.instagram.com/sibiryakov_bro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.img} src={inst_icon} alt="instagram" />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a
              href="mailto:sibiryakow91@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.img} src={email_icon} alt="send mail" />
            </a>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          © {new Date().getFullYear()} Andrew Sibiriakov -{" "}
          <Hidden smUp>
            <br />
          </Hidden>{" "}
          Progressive Front End engineering.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
