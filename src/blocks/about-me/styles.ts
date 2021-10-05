import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  skills: {
    backgroundColor: theme.palette.background.dark,
    paddingBottom: 50,
  },
  skillsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 50,
  },
  skillsWrapper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    gap: 20,
    "@media screen and (max-width: 792px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 300,
    padding: 30,
  },
  title: {
    fontSize: 18,
    color: theme.palette.text.green,
  },
  description: {
    fontSize: "1.1rem",
    lineHeight: 1.4,
    margin: 0,
    wordBreak: "break-word",
    color: theme.palette.text.primary,
  },
  icon: {
    display: "block",
    height: 60,
    marginBottom: 20,
  },
}));

export default "styles";
