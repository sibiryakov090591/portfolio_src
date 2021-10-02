import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
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
