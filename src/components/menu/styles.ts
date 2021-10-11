import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
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
    color: theme.palette.text.green,
    fontSize: 50,
  },
}));

export default "styles";
