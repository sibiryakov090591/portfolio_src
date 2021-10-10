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
    <div ref={wrapperRef} className={classes.wrapper}>
      <ul
        className={`${classes.topList} ${
          scrollTop > 50 ? classes.fixedList : ""
        }`}
      >
        <li className={classes.topItem}>
          <span className={classes.topItemIndex}>01.</span>Skills
        </li>
        <li className={classes.topItem}>
          <span className={classes.topItemIndex}>02.</span>Projects
        </li>
        <li className={classes.topItem}>
          <span className={classes.topItemIndex}>03.</span>Resume
        </li>
        <li className={classes.topItem}>
          <span className={classes.topItemIndex}>04.</span>Text me
        </li>
      </ul>

      {/*<ul*/}
      {/*  className={`${classes.topList} ${classes.fixedList} ${*/}
      {/*    scrollTop > 50 ? classes.showList : ""*/}
      {/*  }`}*/}
      {/*>*/}
      {/*  <li className={classes.topItem}>*/}
      {/*    <span className={classes.topItemIndex}>01.</span>Skills*/}
      {/*  </li>*/}
      {/*  <li className={classes.topItem}>*/}
      {/*    <span className={classes.topItemIndex}>02.</span>Projects*/}
      {/*  </li>*/}
      {/*  <li className={classes.topItem}>*/}
      {/*    <span className={classes.topItemIndex}>03.</span>Resume*/}
      {/*  </li>*/}
      {/*  <li className={classes.topItem}>*/}
      {/*    <span className={classes.topItemIndex}>04.</span>Text me*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </div>
  );
};

export default Menu;
