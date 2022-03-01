import React from "react";
import flag_ru from "../../images/lang_ru.svg";
import flag_en from "../../images/lang_en.svg";
import { useI18n } from "../../services/I18next";
import { useStyles } from "./styles";
import useAppTheme from "../../themes/ThemeStyles";
import { MenuList, Popper, MenuItem } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const LangMenu = () => {
  const classes = useStyles();
  const appTheme = useAppTheme();
  const { t, i18n } = useI18n("lang");

  const anchorEl = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const id = open ? "simple-popper" : undefined;

  const handleChangeLocale = (locale: "en" | "ru") => {
    i18n.changeLanguage(locale);
    localStorage.setItem("locale", locale);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={`${classes.langBlock} ${appTheme.link}`}
        onClick={handleClick}
        ref={anchorEl}
      >
        <div>
          {i18n.language === "en" ? (
            <img className={classes.langFlag} src={flag_en} alt="flag_en" />
          ) : (
            <img className={classes.langFlag} src={flag_ru} alt="flag_ru" />
          )}
        </div>
      </div>
      <Popper
        placement={"bottom"}
        role={undefined}
        transition
        disablePortal
        id={id}
        open={open}
        anchorEl={anchorEl.current}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            className={appTheme.selectMenu}
            autoFocusItem={open}
            onClick={handleClose}
          >
            <div className={classes.title}>{t("title")}</div>
            <MenuItem
              className={appTheme.selectMenuItem}
              onClick={() => handleChangeLocale("en")}
              selected={i18n.language === "en"}
            >
              <img
                className={classes.langFlagItem}
                src={flag_en}
                alt="flag_en"
              />
              <span className={classes.text}>{t("en")}</span>
            </MenuItem>
            <MenuItem
              className={appTheme.selectMenuItem}
              onClick={() => handleChangeLocale("ru")}
              selected={i18n.language === "ru"}
            >
              <img
                className={classes.langFlagItem}
                src={flag_ru}
                alt="flag_ru"
              />
              <span className={classes.text}>{t("ru")}</span>
            </MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default LangMenu;
