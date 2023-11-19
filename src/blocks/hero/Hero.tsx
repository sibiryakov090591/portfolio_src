import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { useStyles } from "./styles";
import { Box } from "@material-ui/core";
import { gsap } from "gsap";

const Hero: React.FC = () => {
  const classes = useStyles();

  const photo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(photo.current, {
      x: "-20px",
      delay: 1,
      duration: 3,
      opacity: 0,
      ease: "circ.out",
    });
  }, []);

  return (
    <section id="hero" className={classes.hero}>
      <Box className={classes.heroContainer}>
        <Box className={classes.heroInner}>
          <div className={classes.photo} ref={photo} />

          <h1 className={classes.presentation}>
            <Typewriter
              options={{
                delay: 25,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1700)
                  .typeString("Hi")
                  .pauseFor(500)
                  .typeString(", <br/> I`m Andrew")
                  .pauseFor(500)
                  .typeString(", <br/> and I create UI/UX.")
                  .start();
              }}
            />
          </h1>
        </Box>
      </Box>
    </section>
  );
};

export default Hero;
