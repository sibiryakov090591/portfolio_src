import React, { useEffect, useRef, useState } from "react";
import { useStyles } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import logo from "../../images/logo.svg";

const Menu: React.FC = () => {
  const classes = useStyles();

  const burgerRef = useRef(null);

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
      duration: 0,
    });
    tl.from(burgerRef.current, {
      opacity: 0,
      duration: 0.6,
    });
    tl.from("#logo", {
      opacity: 0,
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

  return (
    <header
      className={`${classes.wrapper} ${
        scrollTop > 60 ? classes.fixedList : ""
      }`}
    >
      <div
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        id="logo"
        className={classes.logoWrapper}
      >
        <img className={classes.img} src={logo} alt="logo" />
      </div>
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
                Skills
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
                Projects
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
                Resume
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
                <span className={classes.topItemIndexMobile}>04.</span>Text me
              </li>
            </Link>
          </ul>
        </nav>
      </div>

      {/*Desktop*/}
      <nav className={classes.desktopMenu}>
        <ul className={classes.topList}>
          <Link
            to="skills"
            offset={-60}
            smooth={true}
            spy={true}
            duration={600}
            className={classes.topItem}
          >
            <li id="menu_item">
              <span className={classes.topItemIndex}>01.</span>Skills
            </li>
          </Link>
          <Link
            to="projects"
            offset={-60}
            smooth={true}
            spy={true}
            duration={600}
            className={classes.topItem}
          >
            <li id="menu_item">
              <span className={classes.topItemIndex}>02.</span>Projects
            </li>
          </Link>
          <Link
            to="resume"
            offset={-60}
            smooth={true}
            spy={true}
            duration={600}
            className={classes.topItem}
          >
            <li id="menu_item">
              <span className={classes.topItemIndex}>03.</span>Resume
            </li>
          </Link>
          <Link
            to="contact"
            offset={-60}
            smooth={true}
            spy={true}
            duration={600}
            className={classes.topItem}
          >
            <li id="menu_item">
              <span className={classes.topItemIndex}>04.</span>Text me
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
