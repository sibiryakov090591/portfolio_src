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
  wrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    color: theme.palette.text.secondary,
    fontWeight: "bold",
    fontSize: "1.2rem",
    lineHeight: 1.6,
    maxWidth: "60vw",
    zIndex: 3,
  },
  image: {
    position: "absolute",
    right: "-10%",
    "&:before": {
      content: "''",
      display: "block",
      top: 0,
      bottom: 4,
      left: 0,
      right: 0,
      position: "absolute",
      background: "rgba(2,21,21,0.64)",
      borderRadius: "50ch",
      zIndex: 2,
    },
    "& video, img": {
      width: 230,
      border: `7px dashed ${theme.palette.border.green}`,
      borderRadius: "50ch",
    },
  },
}));

export default "styles";
