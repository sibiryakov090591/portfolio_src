import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import background from "../../images/background/blackgrit-6a2d636a530802d3ce97afb7af53a84b.png";

export const useStyles = makeStyles((theme: AppTheme) => ({
  footer: {
    backgroundColor: theme.palette.background.dark,
    backgroundImage: `url(${background})`,
    backgroundSize: "30%",
    paddingBottom: 50,
  },
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.text.primary,
  },
  socialsWrapper: {
    display: "flex",
    marginBottom: 20,
  },
  imgWrapper: {
    width: 25,
    marginLeft: 15,
    marginRight: 15,
  },
  img: {
    width: "100%",
    filter: "grayscale(1)",
    transition: "all 250ms ease",
    "&:hover": {
      filter: "grayscale(0)",
    },
  },
}));

export default "styles";
