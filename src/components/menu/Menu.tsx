import React, { useEffect, useRef, useState } from "react";
import { useStyles } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import logo from "../../assets/images/logo.svg";
import { useI18n } from "../../services/I18next";
import LangMenu from "../langMenu/LangMenu";
import useAppTheme from "../../themes/ThemeStyles";
import NavLink from "./NavLink/NavLink";
import { Box, Drawer } from "@material-ui/core";

const menuItems = [
  { name: "about", to: "about", index: "01" },
  { name: "skills", to: "skills", index: "02" },
  { name: "projects", to: "projects", index: "03" },
  { name: "resume", to: "resume", index: "04" },
  { name: "text_me", to: "contact", index: "05" },
];

const Menu: React.FC = () => {
  const classes = useStyles();
  const appTheme = useAppTheme();
  const { t } = useI18n("menu");

  const burgerRef = useRef(null);
  const logoRef = useRef(null);

  const [pageYOffset, setPageYOffset] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.pageYOffset >= 60) {
        if (pageYOffset !== 60) setPageYOffset(60);
      } else {
        if (pageYOffset === 60) setPageYOffset(0);
      }
    };
    window.removeEventListener("scroll", listener);
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [pageYOffset]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from("#menu_item", {
      delay: 0.5,
      stagger: 0.12,
      ease: "circ.out",
      opacity: 0,
      x: "-22px",
      duration: 0.6,
    });
  }, []);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <header
      className={`${classes.wrapper} ${
        pageYOffset === 60 ? classes.fixedList : ""
      }`}
    >
      <div ref={logoRef} className={classes.logoWrapper}>
        <NavLink
          className={appTheme.link}
          to="hero"
          smooth={true}
          spy={true}
          duration={600}
        >
          <img className={classes.img} src={logo} alt="logo" />
        </NavLink>
      </div>

      {/*Mobile*/}
      <div
        ref={burgerRef}
        onClick={toggleDrawer(!isOpen)}
        className={classes.burgerWrapper}
      >
        <BlurOnIcon className={classes.burgerIcon} />
      </div>

      <Drawer
        anchor={"right"}
        open={isOpen}
        onClose={toggleDrawer(false)}
        transitionDuration={500}
        ModalProps={{
          BackdropProps: {
            classes: {
              root: classes.backdrop,
            },
          },
        }}
      >
        <div className={classes.mobileMenuWrapper}>
          <nav className={classes.mobileList}>
            <ul style={{ padding: 0 }}>
              {menuItems.map((item) => {
                return (
                  <NavLink
                    key={item.to}
                    onClick={toggleDrawer(false)}
                    to={item.to}
                    offset={-60}
                    smooth={true}
                    spy={true}
                    duration={600}
                    className={`${classes.topItem} ${classes.topItemMobile}`}
                  >
                    <li>
                      <span className={classes.topItemIndexMobile}>
                        {item.index}.
                      </span>
                      {t(item.name)}
                    </li>
                  </NavLink>
                );
              })}
            </ul>
          </nav>
        </div>
      </Drawer>

      {/*Desktop*/}
      <Box display="flex" alignItems="center">
        <nav className={classes.desktopMenu}>
          <ul className={classes.topList}>
            {menuItems.map((item) => {
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  offset={-60}
                  smooth={true}
                  spy={true}
                  duration={600}
                  className={classes.topItem}
                >
                  <li id="menu_item">
                    <span className={classes.topItemIndex}>{item.index}.</span>
                    {t(item.name)}
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </nav>
        <div className={classes.langWrapper} id="menu_item">
          <LangMenu />
        </div>
      </Box>
    </header>
  );
};

export default Menu;
