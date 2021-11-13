import React from "react";
import flag_ru from "../../images/lang_ru.svg";
import flag_en from "../../images/lang_en.svg";
import { useI18n } from "../../services/I18next";
import { useStyles } from "./styles";
import useAppTheme from "../../themes/ThemeStyles";

const LangMenu = () => {
  const classes = useStyles();
  const appTheme = useAppTheme();
  const { i18n } = useI18n();

  const handleChangeLocale = (locale) => {
    i18n.changeLanguage(locale);
    localStorage.setItem("locale", locale);
  };

  return (
    <div
      className={`${classes.langBlock} ${appTheme.link}`}
      tabIndex={5}
      onClick={() => handleChangeLocale(i18n.language === "en" ? "ru" : "en")}
    >
      <div>
        {i18n.language === "ru" ? (
          <img className={classes.langFlag} src={flag_en} alt="flag_en" />
        ) : (
          <img className={classes.langFlag} src={flag_ru} alt="flag_ru" />
        )}
      </div>
    </div>
  );
};

export default LangMenu;
