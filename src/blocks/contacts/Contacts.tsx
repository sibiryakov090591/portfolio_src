import React, { useRef, useState } from "react";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import { useStyles } from "./styles";
import Button from "../../components/menu/Button/Button";
import emailjs from "@emailjs/browser";
import useAppTheme from "../../themes/ThemeStyles";
import { useI18n } from "../../services/I18next";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";

const transition = (props: any) => <Slide {...props} direction="up" />;

const Contacts: React.FC = () => {
  const classes = useStyles();
  const appTheme = useAppTheme();
  const { t } = useI18n("contacts");
  const formRef = useRef(null);

  const [sending, setSending] = useState(false);
  const [open, setOpen] = React.useState(false);

  const onCloseAlert = (e: any, reason: string) => {
    if (reason !== "clickaway") setOpen(false);
  };

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
            {sending ? t("sending") : t("button")}
          </Button>
        </form>
        <Snackbar
          open={open}
          onClose={onCloseAlert}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          TransitionComponent={transition}
          key={transition ? transition.name : ""}
        >
          <Alert elevation={6} variant="filled" severity="success">
            {t("alert")}
          </Alert>
        </Snackbar>
      </Container>
    </section>
  );
};

export default Contacts;
