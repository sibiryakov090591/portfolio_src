import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import background from "../../images/background/blackgrit-6a2d636a530802d3ce97afb7af53a84b.png";

export const useStyles = makeStyles((theme: AppTheme) => ({
  root: {
    height: "100vh",
    background: theme.palette.background.dark,
    backgroundImage: `url(${background})`,
    backgroundSize: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  preloader: {
    position: "relative",
    "& img": {
      width: 120,
      background: "radial-gradient(#3f3f37 6%, transparent 38%)",
    },
  }
}));

export default "styles";
