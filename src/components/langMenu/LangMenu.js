import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import flag_ru from "../../images/lang_ru.svg";
import flag_en from "../../images/lang_en.svg";
import { useI18n } from "../../services/I18next";
import { useStyles } from "./styles";
import useAppTheme from "../../themes/ThemeStyles";

const LangMenu = () => {
  const classes = useStyles();
  const appTheme = useAppTheme();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { i18n } = useI18n();

  const handleChangeLocale = (locale) => {
    i18n.changeLanguage(locale);
    localStorage.setItem("locale", locale);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const lang = localStorage.getItem("locale");

  return (
    <div className={classes.langBlock}>
      <div style={{ cursor: "pointer" }} onClick={handleToggle}>
        <div ref={anchorRef} aria-haspopup="true">
          <div style={{ display: "flex", alignItems: "center" }}>
            {i18n.language === "en" ? (
              <img className={classes.langFlag} src={flag_en} alt="flag_en" />
            ) : (
              <img className={classes.langFlag} src={flag_ru} alt="flag_en" />
            )}
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement={"bottom-start"}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className={appTheme.selectMenu}
                  autoFocusItem={open}
                  id="lang-list"
                  onClick={handleClose}
                >
                  <MenuItem
                    selected={lang === "ru"}
                    className={appTheme.selectMenuItem}
                    onClick={() => handleChangeLocale("ru")}
                  >
                    RU
                  </MenuItem>
                  <MenuItem
                    selected={lang === "en"}
                    className={appTheme.selectMenuItem}
                    onClick={() => handleChangeLocale("en")}
                  >
                    EN
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default LangMenu;
