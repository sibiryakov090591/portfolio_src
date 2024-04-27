import React, { useEffect, useRef, useState } from "react";
import { useStyles } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import logo from "../../assets/images/logo.svg";
import { useI18n } from "../../services/I18next";
import LangMenu from "../langMenu/LangMenu";
import useAppTheme from "../../themes/ThemeStyles";
import NavLink from "./NavLink/NavLink";
import { Box, Hidden } from "@material-ui/core";

const Menu: React.FC = () => {
  const classes = useStyles();
  const appTheme = useAppTheme();
  const { t } = useI18n("menu");

  const burgerRef = useRef(null);
  const langRef = useRef(null);
  const logoRef = useRef(null);

  const [pageYOffset, setPageYOffset] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [pageYOffset]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from("#menu_item", {
      delay: 0.5,
      stagger: 0.12,
      ease: "circ.out",
      opacity: 0,
      x: "-22px",
      duration: 0.6,
    });
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

  const listener = () => {
    if (window.pageYOffset >= 60) {
      if (pageYOffset !== 60) setPageYOffset(60);
    } else {
      if (pageYOffset === 60) setPageYOffset(0);
    }
  };

  return (
    <header
      className={`${classes.wrapper} ${
        pageYOffset === 60 ? classes.fixedList : ""
      }`}
    >
      <div ref={logoRef} className={classes.logoWrapper}>
        <NavLink
          className={appTheme.link}
          to="hero"
          smooth={true}
          spy={true}
          duration={600}
        >
          <img className={classes.img} src={logo} alt="logo" />
        </NavLink>
      </div>

      {/*<div ref={langRef} className={classes.mobileContainer}>*/}
      {/*  <LangMenu />*/}
      {/*</div>*/}

      {/*Mobile*/}
      <div
        ref={burgerRef}
        onClick={toggleMobileMenuHandler}
        className={classes.burgerWrapper}
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
            <NavLink
              onClick={toggleMobileMenuHandler}
              to="about"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={`${classes.topItem} ${classes.topItemMobile}`}
            >
              <li>
                <span className={classes.topItemIndexMobile}>01.</span>
                {t("about")}
              </li>
            </NavLink>
            <NavLink
              onClick={toggleMobileMenuHandler}
              to="skills"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={`${classes.topItem} ${classes.topItemMobile}`}
            >
              <li>
                <span className={classes.topItemIndexMobile}>02.</span>
                {t("skills")}
              </li>
            </NavLink>
            <NavLink
              onClick={toggleMobileMenuHandler}
              to="projects"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={`${classes.topItem} ${classes.topItemMobile}`}
            >
              <li>
                <span className={classes.topItemIndexMobile}>03.</span>
                {t("projects")}
              </li>
            </NavLink>
            <NavLink
              onClick={toggleMobileMenuHandler}
              to="resume"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={`${classes.topItem} ${classes.topItemMobile}`}
            >
              <li>
                <span className={classes.topItemIndexMobile}>04.</span>
                {t("resume")}
              </li>
            </NavLink>
            <NavLink
              onClick={toggleMobileMenuHandler}
              to="contact"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={`${classes.topItem} ${classes.topItemMobile}`}
            >
              <li>
                <span className={classes.topItemIndexMobile}>05.</span>
                {t("text_me")}
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>

      {/*Desktop*/}
      <Box display="flex" alignItems="center">
        <nav className={classes.desktopMenu}>
          <ul className={classes.topList}>
            <NavLink
              to="about"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={classes.topItem}
            >
              <li id="menu_item">
                <span className={classes.topItemIndex}>01.</span>
                {t("about")}
              </li>
            </NavLink>
            <NavLink
              to="skills"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={classes.topItem}
            >
              <li id="menu_item">
                <span className={classes.topItemIndex}>02.</span>
                {t("skills")}
              </li>
            </NavLink>
            <NavLink
              to="projects"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={classes.topItem}
            >
              <li id="menu_item">
                <span className={classes.topItemIndex}>03.</span>
                {t("projects")}
              </li>
            </NavLink>
            <NavLink
              to="resume"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={classes.topItem}
            >
              <li id="menu_item">
                <span className={classes.topItemIndex}>04.</span>
                {t("resume")}
              </li>
            </NavLink>
            <NavLink
              to="contact"
              offset={-60}
              smooth={true}
              spy={true}
              duration={600}
              className={classes.topItem}
            >
              <li id="menu_item">
                <span className={classes.topItemIndex}>05.</span>
                {t("text_me")}
              </li>
            </NavLink>
          </ul>
        </nav>
        <div className={classes.langWrapper} id="menu_item">
          <LangMenu />
        </div>
      </Box>
    </header>
  );
};

export default Menu;
