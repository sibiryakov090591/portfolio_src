import React from "react";
import Title from "../../components/title/Title";
import { Container, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import useAppTheme from "../../themes/ThemeStyles";
import { useI18n } from "../../services/I18next";

const Contacts: React.FC = () => {
  const classes = useStyles();
  const appTheme = useAppTheme();
  const { t } = useI18n("contacts");

  return (
    <section id="contact" className={classes.contacts}>
      <Container className={classes.contactsContainer}>
        <Title title={t("menu.text_me")} index="05" />
        <form className={classes.form}>
          <input
            disabled
            className={classes.input}
            type="text"
            placeholder={t("name")}
          />
          <input
            disabled
            className={classes.input}
            type="text"
            placeholder={t("email")}
          />
          <textarea
            disabled
            className={classes.textarea}
            placeholder={t("textarea")}
          ></textarea>
        </form>
        <Button disabled className={appTheme.button}>
          {t("button")}
        </Button>
      </Container>
    </section>
  );
};

export default Contacts;
