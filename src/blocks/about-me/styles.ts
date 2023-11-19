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
  content: {
    color: theme.palette.text.secondary,
    fontWeight: "bold",
    fontSize: "1.2rem",
    lineHeight: 1.6,
    maxWidth: 800,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
    "& img": {
      filter: "drop-shadow(0px 0px 25px #64ffda)",
      marginLeft: 50,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
}));

export default "styles";
