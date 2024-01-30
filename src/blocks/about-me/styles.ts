import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import { Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme & AppTheme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 50,
  },
  content: {
    position: "relative",
    color: theme.palette.text.secondary,
    fontSize: "1.2rem",
    lineHeight: 1.4,
    maxWidth: "60vw",
    zIndex: 3,
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
    },
  },
  settingsIcon: {
    position: "absolute",
    left: "-53px",
    top: "-52px",
    width: 55,
    fill: theme.palette.background.darkYellow,
  },
}));

export default "styles";
