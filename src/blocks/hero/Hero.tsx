import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { useStyles } from "./styles";
import { Box } from "@material-ui/core";
import { gsap } from "gsap";

const Hero: React.FC = () => {
  const classes = useStyles();

  const photo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      photo.current,
      { x: "-80px", opacity: 0 },
      { x: "-100px", duration: 1, opacity: 1 }
    );
  });

  return (
    <section className={classes.hero}>
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
                  .pauseFor(1300)
                  .typeString("Hi")
                  .pauseFor(500)
                  .typeString(", <br/> My name is Andrew")
                  .pauseFor(500)
                  .typeString(", <br/> i`m frontend developer")
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
