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
        <Title title="Text me" index="04" />
        <form className={classes.form}>
          <input
            disabled
            className={classes.input}
            type="text"
            placeholder="Name"
          />
          <input
            disabled
            className={classes.input}
            type="text"
            placeholder="E-Mail"
          />
          <textarea
            disabled
            className={classes.textarea}
            placeholder="Sorry! That functionality are develop"
          ></textarea>
        </form>
        <Button disabled className={appTheme.button}>
          Send
        </Button>
      </Container>
    </section>
  );
};

export default Contacts;
