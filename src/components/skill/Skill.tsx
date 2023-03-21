import React, {useEffect, useRef} from "react";
import { useStyles } from "./styles";
import {gsap} from "gsap";

type PropsType = {
  icon: string;
};

const iconAnimation = (ref: any) => {
    gsap.from(ref.current, {
        scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
        },
        x: "-25px",
        opacity: 0,
        duration: 1.3,
    });
};

const textAnimation = (ref: any) => {
    gsap.from(ref.current, {
        scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
        },
        y: "25px",
        opacity: 0,
        duration: 1.3,
    });
};

const Skill: React.FC<PropsType> = ({ icon, children }) => {
  const classes = useStyles();

    const img = useRef<HTMLDivElement>(null);
    const text = useRef<HTMLDivElement>(null);

    useEffect(() => {
        iconAnimation(img);
        textAnimation(text);
    }, []);

  return (
      <div className={classes.wrapper}>
          <div ref={img} className={classes.iconWrapper}>
              <img className={classes.icon} src={icon} alt="Skill icon" />
          </div>
          <p ref={text} className={classes.description}>
              {children}
          </p>
      </div>
  );
};

export default Skill;
