import React, { useEffect, useRef, useState } from "react";
import { useStyles } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import logo from "../../images/logo.svg";
import { useI18n } from "../../services/I18next";
import LangMenu from "../langMenu/LangMenu";
import Hidden from "@material-ui/core/Hidden";
import useAppTheme from "../../themes/ThemeStyles";

const Menu: React.FC = () => {
  const classes = useStyles();
  const appTheme = useAppTheme();
  const { t } = useI18n("menu");

  const burgerRef = useRef(null);
  const langRef = useRef(null);
  const logoRef = useRef(null);

  const [scrollTop, setScrollTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollTop(window.pageYOffset));
    return () => {
      window.removeEventListener("scroll", () =>
        setScrollTop(window.pageYOffset)
      );
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from("#menu_item", {
      delay: 4.6,
      stagger: 0.1,
      ease: "circ.out",
      opacity: 0,
      y: "-40px",
      duration: 0.6,
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(burgerRef.current, {
      delay: 4.6,
      ease: "circ.out",
      y: 0,
      duration: 0.6,
    });
    tl.from(
      logoRef.current,
      {
        y: -100,
        ease: "circ.out",
        duration: 0.6,
      },
      "<0.2"
    );
    tl.from(
      langRef.current,
      {
        opacity: 0,
        duration: 0.6,
      },
      "<0.4"
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.document.body.classList.add("stopScroll");
      const mask = document.createElement("div");
      mask.classList.add("mask");
      mask.addEventListener("click", () => setIsOpen(false));
      window.document.querySelector("#main")?.append(mask);
    } else {
      window.document.body.classList.remove("stopScroll");
      window.document.querySelector(".mask")?.remove();
    }
  }, [isOpen]);

  const toggleMobileMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`${classes.wrapper} ${
        scrollTop > 60 ? classes.fixedList : ""
      }`}
    >
      <div className={classes.mobileLangAndLogo}>
        <div
          ref={logoRef}
          className={`${classes.logoWrapper} ${classes.mobileContainer}`}
        >
          <Link
            className={`${classes.logoLink} ${appTheme.link}`}
            to="hero"
            smooth={true}
            spy={true}
            duration={600}
          >
            <img className={classes.img} src={logo} alt="logo" />
          </Link>
        </div>
      </div>

      <div className={classes.mobileLangAndLogo}>
        <div ref={langRef} className={classes.mobileContainer}>
          <LangMenu />
        </div>
      </div>

      {/*Mobile*/}
      <div
        ref={burgerRef}
        onClick={toggleMobileMenuHandler}
        className={`${classes.burgerWrapper} ${classes.mobileContainer}`}
      >
        <BlurOnIcon className={classes.burgerIcon} />
      </div>
      {isOpen && (
        <div onClick={toggleMobileMenuHandler} className={classes.mask}></div>
      )}
      <div
        className={`${classes.mobileMenuWrapper} ${
          isOpen ? classes.active : ""
        }`}
      >
        <nav className={classes.mobileList}>
          <ul style={{ padding: 0 }}>
            <Link
              onClick={toggleMobileMenuHandler}
              to="skills"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={`${classes.topItem} ${classes.topItemMobile}`}
            >
              <li>
                <span className={classes.topItemIndexMobile}>01.</span>
                {t("skills")}
              </li>
            </Link>
            <Link
              onClick={toggleMobileMenuHandler}
              to="projects"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={`${classes.topItem} ${classes.topItemMobile}`}
            >
              <li>
                <span className={classes.topItemIndexMobile}>02.</span>
                {t("projects")}
              </li>
            </Link>
            <Link
              onClick={toggleMobileMenuHandler}
              to="resume"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={`${classes.topItem} ${classes.topItemMobile}`}
            >
              <li>
                <span className={classes.topItemIndexMobile}>03.</span>
                {t("resume")}
              </li>
            </Link>
            <Link
              onClick={toggleMobileMenuHandler}
              to="contact"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={`${classes.topItem} ${classes.topItemMobile}`}
            >
              <li>
                <span className={classes.topItemIndexMobile}>04.</span>
                {t("text_me")}
              </li>
            </Link>
          </ul>
        </nav>
      </div>

      {/*Desktop*/}
      <nav className={classes.desktopMenu}>
        <ul className={classes.topList}>
          <Link
            tabIndex={1}
            to="skills"
            offset={-60}
            smooth={true}
            spy={true}
            duration={600}
            className={classes.topItem}
          >
            <li id="menu_item">
              <span className={classes.topItemIndex}>01.</span>
              {t("skills")}
            </li>
          </Link>
          <Link
            tabIndex={2}
            to="projects"
            offset={-60}
            smooth={true}
            spy={true}
            duration={600}
            className={classes.topItem}
          >
            <li id="menu_item">
              <span className={classes.topItemIndex}>02.</span>
              {t("projects")}
            </li>
          </Link>
          <Link
            tabIndex={3}
            to="resume"
            offset={-60}
            smooth={true}
            spy={true}
            duration={600}
            className={classes.topItem}
          >
            <li id="menu_item">
              <span className={classes.topItemIndex}>03.</span>
              {t("resume")}
            </li>
          </Link>
          <Link
            tabIndex={4}
            to="contact"
            offset={-60}
            smooth={true}
            spy={true}
            duration={600}
            className={classes.topItem}
          >
            <li id="menu_item">
              <span className={classes.topItemIndex}>04.</span>
              {t("text_me")}
            </li>
          </Link>
        </ul>

        <div className={classes.langWrapper} id="menu_item">
          <LangMenu />
        </div>

        <div id="logo" className={classes.logoWrapper}>
          <Link to="hero" smooth={true} spy={true} duration={600}>
            <img className={classes.img} src={logo} alt="logo" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
