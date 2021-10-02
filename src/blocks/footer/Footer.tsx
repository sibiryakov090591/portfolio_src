import React from "react";
import { Container } from "@material-ui/core";
import { useStyles } from "./styles";

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.footerContainer}>
        <div>© 2021 Copyright.</div>
      </Container>
    </footer>
  );
};

export default Footer;
