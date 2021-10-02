import React from "react";
import Title from "../../components/title/Title";
import { Container, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import useAppTheme from "../../themes/ThemeStyles";

const Contacts: React.FC = () => {
  const classes = useStyles();
  const appTheme = useAppTheme();

  return (
    <section className={classes.contacts}>
      <Container className={classes.contactsContainer}>
        <Title title="Контакты" index="04" />
        <form className={classes.form}>
          <input className={classes.input} type="text" placeholder="input" />
          <input className={classes.input} type="text" placeholder="input" />
          <textarea
            className={classes.textarea}
            placeholder="textarea"
          ></textarea>
        </form>
        <Button className={appTheme.button}>Send</Button>
      </Container>
    </section>
  );
};

export default Contacts;
