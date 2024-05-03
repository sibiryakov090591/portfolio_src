import React from "react";
import Typewriter from "typewriter-effect";
import { useStyles } from "./styles";
import { Box } from "@material-ui/core";

const Hero: React.FC = () => {
  const classes = useStyles();

  return (
    <section id="hero" className={classes.hero}>
      <Box className={classes.heroContainer}>
        <Box className={classes.heroInner}>
          <div className={classes.photo} />

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
