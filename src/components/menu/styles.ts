import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import { Theme } from "@material-ui/core/styles/createTheme";
import background from "../../images/background/blackgrit-6a2d636a530802d3ce97afb7af53a84b.png";

export const useStyles = makeStyles((theme: AppTheme & Theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    padding: "0 20px",
    zIndex: 2,
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    height: 60,
    backgroundColor: "rgba(10, 25, 47, 0.65)",
    backgroundImage: `url(${background})`,
    backgroundSize: "30%",
    backdropFilter: "blur(10px)",
    transition: "all 300ms ease",
    [theme.breakpoints.down("sm")]: {
      height: 80,
      justifyContent: "space-between",
    },
  },
  logoWrapper: {
    cursor: "pointer",
    width: 45,
    height: 45,
  },
  logoLink: {
    height: 45,
  },
  mobileContainer: {
    width: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 45,
  },
  desktopMenu: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  topList: {
    display: "flex",
    color: theme.palette.text.secondary,
    transition: "all 300ms ease",
  },
  topItem: {
    color: theme.palette.text.secondary,
    cursor: "pointer",
    padding: "30px 0",
    transition: "all 300ms ease",
    marginRight: 40,
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
    "&:hover": {
      color: theme.palette.text.green,
    },
  },
  topItemMobile: {
    display: "block",
    fontSize: 22,
    marginRight: 0,
    padding: 0,
    "&:not(:last-child)": {
      borderBottom: `1px dashed #21453c`,
    },
    "& li": {
      padding: "30px 50px",
      [theme.breakpoints.down("xs")]: {
        padding: "25px 45px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  topItemIndex: {
    color: theme.palette.text.green,
    marginRight: 6,
    fontFamily: "Orbitron",
    fontWeight: 600,
  },
  topItemIndexMobile: {
    display: "block",
    fontSize: 20,
    marginBottom: 5,
    color: theme.palette.text.green,
    fontFamily: "Orbitron",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  fixedList: {
    boxShadow: "0 10px 20px -10px #000",
    height: 70,
    [theme.breakpoints.down("sm")]: {
      height: 90,
    },
  },
  burgerWrapper: {
    zIndex: 100,
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  burgerIcon: {
    color: theme.palette.text.green,
    fontSize: 60,
    cursor: "pointer",
  },
  mobileMenuWrapper: {
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.background.dark,
    height: "100vh",
    position: "absolute",
    top: 0,
    right: 0,
    width: "40%",
    transition: "all 400ms ease",
    transform: "translateX(100%)",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "65%",
    },
  },
  mobileList: {
    textAlign: "start",
    width: "100%",
  },
  active: {
    transform: "translateX(0)",
  },
  mask: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    height: "100vh",
    backdropFilter: "blur(2px) brightness(0.7)",
  },
  langWrapper: {
    marginRight: 40,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileLangAndLogo: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default "styles";
