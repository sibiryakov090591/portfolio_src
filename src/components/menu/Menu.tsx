import React, { useEffect, useRef, useState } from "react";
import { useStyles } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-scroll";
import { gsap } from "gsap";

const Menu: React.FC = () => {
  const classes = useStyles();

  const [scrollTop, setScrollTop] = useState(0);

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

  return (
    <header
      className={`${classes.wrapper} ${
        scrollTop > 60 ? classes.fixedList : ""
      }`}
    >
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
    </header>
  );
};

export default Menu;
