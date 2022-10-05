import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import background from "../../images/background/blackgrit-6a2d636a530802d3ce97afb7af53a84b.png";

export const useStyles = makeStyles((theme: AppTheme) => ({
  contacts: {
    backgroundColor: theme.palette.background.dark,
    backgroundImage: `url(${background})`,
    backgroundSize: "30%",
    paddingBottom: 50,
  },
  contactsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 50,
    width: 400,
    "@media screen and (max-width: 520px)": {
      width: "100%",
    },
  },
  input: {
    padding: "0 5px",
    width: "100%",
    height: 25,
    marginBottom: 10,
    outline: "none",
  },
  textarea: {
    width: "100%",
    minHeight: 100,
    resize: "none",
    padding: 5,
    outline: "none",
  },
}));

export default "styles";
