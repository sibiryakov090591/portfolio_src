import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import BlurOnIcon from "@material-ui/icons/BlurOn";

const Menu: React.FC = () => {
  const classes = useStyles();

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
      stagger: 0.1,
      ease: "circ.out",
      opacity: 0,
      y: "-40px",
      duration: 0.6,
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.document.body.classList.add("stopScroll");
      window.document.querySelector("#main")?.classList.add("blur");
    } else {
      window.document.body.classList.remove("stopScroll");
      window.document.querySelector("#main")?.classList.remove("blur");
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
      {/*Mobile*/}
      <div onClick={toggleMobileMenuHandler} className={classes.burgerWrapper}>
        <BlurOnIcon className={classes.burgerIcon} />
      </div>
      <div
        className={`${classes.mobileMenuWrapper} ${
          isOpen ? classes.active : ""
        }`}
      >
        <nav className={classes.mobileList}>
          <ul>
            <Link
              onClick={toggleMobileMenuHandler}
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
              onClick={toggleMobileMenuHandler}
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
              onClick={toggleMobileMenuHandler}
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
              onClick={toggleMobileMenuHandler}
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
      </div>

      {/*Desktop*/}
      <nav className={classes.topList}>
        <ul>
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
