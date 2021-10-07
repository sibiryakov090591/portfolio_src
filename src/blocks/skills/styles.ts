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
  wrapper: {
    display: "flex",
    alignItems: "center",
    maxWidth: 800,
    padding: 30,
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
  },
  iconWrapper: {
    border: `8px solid ${theme.palette.app.grey500}`,
    backgroundColor: theme.palette.app.grey600,
    borderRadius: 12,
    height: 150,
    width: 150,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    borderRadius: 3,
  },
}));

export default "styles";
