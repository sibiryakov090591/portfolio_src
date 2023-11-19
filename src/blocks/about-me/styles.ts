import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import background from "../../images/background/blackgrit-6a2d636a530802d3ce97afb7af53a84b.png";

export const useStyles = makeStyles((theme: AppTheme) => ({
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
    fontSize: "1.1rem",
    lineHeight: 1.4,
  },
}));

export default "styles";
