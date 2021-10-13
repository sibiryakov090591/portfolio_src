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
    cursor: "pointer",
    padding: "30px 0",
    transition: "all 300ms ease",
    "&:hover": {
      color: theme.palette.text.green,
    },
    "&:not(:last-child)": {
      marginRight: 40,
    },
  },
  topItemIndex: {
    color: theme.palette.text.green,
    marginRight: 6,
  },
  fixedList: {
    boxShadow: "0 10px 20px -10px #000",
    height: 70,
  },
  burgerWrapper: {
    position: "relative",
  },
  burgerIcon: {
    display: "none",
    color: theme.palette.text.green,
    fontSize: 50,
    marginRight: 20,
    cursor: "pointer",
    [theme.breakpoints.down(901)]: {
      display: "block",
    },
  },
  mobileMenuWrapper: {
    height: "100vh",
    overflow: "hidden",
    filter: "blur(5px) brightness(0.7)",
  },
}));

export default "styles";
