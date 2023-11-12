import React, {useEffect, useRef} from "react";
import { useStyles } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import loading from "../../images/2.gif";
import {gsap} from "gsap";

const LoadingPage: React.FC = () => {
  const classes = useStyles();

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.to(ref.current, {
            delay: 3,
            duration: 1,
            opacity: 0,
            ease: "circ.out",
        });
    }, []);

  return (
    <div className={classes.root}>
        <div ref={ref} className={classes.preloader}>
            <img src={loading} alt="loading"/>
        </div>
    </div>
  );
};

export default LoadingPage;
