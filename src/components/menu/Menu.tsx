import React, { useEffect, useRef, useState } from "react";
import { useStyles } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Menu: React.FC = () => {
  const classes = useStyles();

  const wrapperRef = useRef<HTMLDivElement>(null);

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
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.from(elem.current, {
    //   scrollTrigger: elem.current,
    //   x: "40px",
    //   opacity: 0,
    //   duration: 1.2,
    // });
  });

  return (
    <header
      ref={wrapperRef}
      className={`${classes.wrapper} ${
        scrollTop > 60 ? classes.fixedList : ""
      }`}
    >
      <ul className={classes.topList}>
        <a href="#skills" className={classes.topItem}>
          <li>
            <span className={classes.topItemIndex}>01.</span>Skills
          </li>
        </a>
        <a href="#projects" className={classes.topItem}>
          <li>
            <span className={classes.topItemIndex}>02.</span>Projects
          </li>
        </a>
        <a href="#resume" className={classes.topItem}>
          <li>
            <span className={classes.topItemIndex}>03.</span>Resume
          </li>
        </a>
        <a href="#contact" className={classes.topItem}>
          <li>
            <span className={classes.topItemIndex}>04.</span>Text me
          </li>
        </a>
      </ul>
    </header>
  );
};

export default Menu;
