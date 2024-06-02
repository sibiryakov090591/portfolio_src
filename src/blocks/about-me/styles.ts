import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import { Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme & AppTheme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 90,
  },
  content: {
    position: "relative",
    color: theme.palette.text.secondary,
    fontSize: "1.2rem",
    lineHeight: 1.5,
    width: "70vw",
    zIndex: 3,
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        padding: "0 30px",
    },
    [theme.breakpoints.down("xs")]: {
        padding: "0px",
    },
    "&:before": {
      content: "''",
      display: "block",
      width: 5,
      margin: "12px 0",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "-30px",
      backgroundColor: theme.palette.app.grey700,
      [theme.breakpoints.down("sm")]: {
        display: "none",
    },
    },
  },
  settingsIcon: {
    position: "absolute",
    left: "-53px",
    top: "-52px",
    width: 55,
    fill: theme.palette.background.darkYellow,
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
  },
}));

export default "styles";
