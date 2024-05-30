import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import { Theme } from "@material-ui/core/styles/createTheme";

export const useStyles = makeStyles((theme: AppTheme & Theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    zIndex: 100,
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    height: 60,
    backdropFilter: "blur(10px)",
    transition: "all 300ms ease",
    [theme.breakpoints.down("sm")]: {
      height: 80,
      justifyContent: "space-between",
    },
  },
  logoWrapper: {
    cursor: "pointer",
    height: 35,
    marginLeft: "40px",
    [theme.breakpoints.down(980)]: {
        marginLeft: "0px",
    },
  },
  mobileContainer: {
    width: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: "100%",
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
    margin: 0,
  },
  topItem: {
    color: theme.palette.text.secondary,
    cursor: "pointer",
    padding: "25px 0",
    transition: "all 300ms ease",
    marginRight: 40,
    fontWeight: 400,
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
    "&:hover": {
      color: theme.palette.text.green,
    },
  },
  topItemMobile: {
    display: "block",
    fontSize: 20,
    marginRight: 0,
    padding: 0,
    borderBottom: `4px solid #061813`,
    "&:first-child": {
      borderTop: `4px solid #061813`,
    },
    "& li": {
      padding: "30px 50px",
      [theme.breakpoints.down("xs")]: {
        padding: "25px 45px",
      },
    },
  },
  topItemIndex: {
    color: theme.palette.text.green,
    marginRight: 4,
    fontFamily: "Orbitron",
    fontWeight: 600,
    fontSize: 13,
    transition: "all 300ms ease",
  },
  topItemIndexMobile: {
    fontWeight: 400,
    fontSize: 16,
    marginRight: 12,
    color: theme.palette.text.green,
    fontFamily: "Orbitron",
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
    position: "absolute",
    right: 20,
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
}));

export default "styles";
