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
    lineHeight: 1.5,
    maxWidth: "60vw",
    zIndex: 3,
  },
  image: {
    position: "absolute",
    right: "-13%",
    bottom: "-50%",
    "&:before": {
      content: "''",
      display: "block",
      top: 0,
      bottom: 4,
      left: 0,
      right: 0,
      position: "absolute",
      background: "rgba(23,116,151,0.3)",
      borderRadius: "50ch",
      zIndex: 2,
      animation: `$bright 10s forwards infinite`,
    },
    "& video, img": {
      width: 230,
      border: `3px dashed ${theme.palette.border.green}`,
      borderRadius: "50ch",
    },
  },
  "@keyframes bright": {
    "0%": { boxShadow: "0px 0px 220px -32px #a6e3d6a8" },
    "50%": { boxShadow: "0px 0px 500px -24px #0ad4abc2" },
    "100%": { boxShadow: "0px 0px 220px -32px #a6e3d6a8" },
  },
}));

export default "styles";
