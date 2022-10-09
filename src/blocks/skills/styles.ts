import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import background from "../../images/background/blackgrit-6a2d636a530802d3ce97afb7af53a84b.png";

export const useStyles = makeStyles((theme: AppTheme) => ({
  skills: {
    backgroundColor: theme.palette.background.dark,
    backgroundImage: `url(${background})`,
    backgroundSize: "30%",
    paddingBottom: 50,
  },
  skillsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 50,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    maxWidth: 800,
    padding: 30,
    "@media screen and (max-width: 615px)": {
      flexDirection: "column",
      maxWidth: 430,
    },
  },
  title: {
    fontSize: 18,
    color: theme.palette.text.green,
  },
  description: {
    marginLeft: 30,
    fontSize: "1.1rem",
    lineHeight: 1.4,
    margin: 0,
    wordBreak: "break-word",
    color: theme.palette.text.primary,
    width: 600,
    fontWeight: "bold",
    "@media screen and (max-width: 900px)": {
      width: "auto",
    },
  },
  iconWrapper: {
    border: `8px solid ${theme.palette.skill.border}`,
    backgroundColor: theme.palette.skill.background,
    borderRadius: 12,
    height: 150,
    width: 150,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width: 615px)": {
      marginBottom: 20,
    },
  },
  icon: {
    height: "100%",
    borderRadius: 3,
  },
}));

export default "styles";
