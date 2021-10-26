import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import { Theme } from "@material-ui/core/styles/createTheme";

export const useStyles = makeStyles((theme: AppTheme & Theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    zIndex: 2,
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    height: 60,
    backgroundColor: "rgba(10, 25, 47, 0.65)",
    backdropFilter: "blur(10px)",
    transition: "all 300ms ease",
  },
  topList: {
    display: "flex",
    marginRight: 80,
    color: theme.palette.text.secondary,
    transition: "all 300ms ease",
    [theme.breakpoints.down(901)]: {
      display: "none",
    },
  },
  topItem: {
    color: theme.palette.text.secondary,
    cursor: "pointer",
    padding: "30px 0",
    transition: "all 300ms ease",
    "&:hover": {
      color: theme.palette.text.green,
    },
    "&:not(:last-child)": {
      marginRight: 40,
      [theme.breakpoints.down(901)]: {
        marginRight: 0,
      },
    },
  },
  topItemMobile: {
    display: "block",
    fontSize: 22,
    marginRight: 0,
    padding: 0,
    "&:not(:last-child)": {
      borderBottom: `3px dashed darkorchid`,
    },
    "& li": {
      padding: "30px 50px",
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
  },
  fixedList: {
    boxShadow: "0 10px 20px -10px #000",
    height: 70,
  },
  burgerWrapper: {
    padding: 10,
    zIndex: 100,
  },
  burgerWrapperActive: {},
  burgerIcon: {
    display: "none",
    color: theme.palette.text.green,
    fontSize: 60,
    marginRight: 20,
    cursor: "pointer",
    [theme.breakpoints.down(901)]: {
      display: "block",
    },
  },
  mobileMenuWrapper: {
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(90deg,transparent 0%,${theme.palette.background.dark} 20%)`,
    height: "100vh",
    position: "absolute",
    top: 0,
    right: 0,
    width: "50%",
    transition: "all 400ms ease",
    transform: "translateX(100%)",
    paddingLeft: 100,
  },
  mobileList: {
    textAlign: "start",
    width: "100%",
  },
  active: {
    transform: "translateX(0)",
  },
  mask: {
    height: "100vh",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
  },
}));

export default "styles";
