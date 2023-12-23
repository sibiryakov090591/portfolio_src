import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import background from "../../images/background/blackgrit-6a2d636a530802d3ce97afb7af53a84b.png";
import { Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme & AppTheme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    backgroundImage: `url(${background})`,
    backgroundSize: "30%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 50,
  },
  wrapper: {
    // maxWidth: 800,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  content: {
    color: theme.palette.text.secondary,
    fontWeight: "bold",
    fontSize: "1.2rem",
    lineHeight: 1.5,
    maxWidth: 800,
  },
  image: {
    // transform: "rotate(-90deg)",
    position: "relative",
    marginLeft: 16,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:before": {
      content: "''",
      display: "block",
      top: 0,
      bottom: 4,
      left: 0,
      right: 0,
      position: "absolute",
      background: "rgba(5,118,91,0.3)",
      borderRadius: "50ch",
      zIndex: 2,
    },
    "& img": {
      animation: `$light 1.6s`,
      animationFillMode: "forwards",
      width: 180,
      borderRadius: "50ch",
      border: "3px solid #3aa49d",
    },
  },
  "@keyframes light": {
    "0%": { filter: "drop-shadow(0px 0px 0px #21d2c3)" },
    "100%": { filter: "drop-shadow(0px 0px 360px #21d2c3)" },
  },
}));

export default "styles";
