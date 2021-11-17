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
  const { i18n } = useI18n();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleChangeLocale = (locale: "en" | "ru") => {
    i18n.changeLanguage(locale);
    localStorage.setItem("locale", locale);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        className={`${classes.langBlock} ${appTheme.link}`}
        onClick={handleClick}
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
        placement="bottom"
        role={undefined}
        transition
        disablePortal
        id={id}
        open={open}
        anchorEl={anchorEl}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            className={appTheme.selectMenu}
            autoFocusItem={open}
            onClick={handleClose}
          >
            <MenuItem
              className={appTheme.selectMenuItem}
              onClick={() => handleChangeLocale("en")}
            >
              <img className={classes.langFlag} src={flag_en} alt="flag_en" />
              English
            </MenuItem>
            <MenuItem
              className={appTheme.selectMenuItem}
              onClick={() => handleChangeLocale("ru")}
            >
              <img className={classes.langFlag} src={flag_ru} alt="flag_ru" />
              Russian
            </MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default LangMenu;
