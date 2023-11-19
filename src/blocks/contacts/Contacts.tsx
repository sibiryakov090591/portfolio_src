import React, { useRef, useState } from "react";
import Title from "../../components/title/Title";
import { Container, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import emailjs from "@emailjs/browser";
import useAppTheme from "../../themes/ThemeStyles";
import { useI18n } from "../../services/I18next";
import CircularProgress from "@material-ui/core/CircularProgress";

const Contacts: React.FC = () => {
  const classes = useStyles();
  const appTheme = useAppTheme();
  const { t } = useI18n("contacts");
  const formRef = useRef(null);

  const [sending, setSending] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_mtgrfeg",
        "template_dasqvok",
        e.target,
        "l7GEs8PaoeFa8WjQY"
      )
      .then(
        (result) => {
          console.log(result.text);
          // @ts-ignore
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className={classes.contacts}>
      <Container className={classes.contactsContainer}>
        <Title title={t("menu.text_me")} index="05" />
        <form ref={formRef} onSubmit={sendEmail} className={classes.form}>
          <input
            required
            className={classes.input}
            type="text"
            name="name"
            placeholder={t("name")}
          />
          <input
            required
            className={classes.input}
            type="text"
            name="contact"
            placeholder={t("email")}
          />
          <textarea
            required
            className={classes.textarea}
            placeholder={t("textarea")}
            name="message"
          />
          <Button
            disabled={sending}
            type="submit"
            className={`${appTheme.button} ${classes.button}`}
          >
            {sending && <CircularProgress disableShrink />}
            {t("button")}
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default Contacts;
