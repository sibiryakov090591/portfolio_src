import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "./paletteTypes";

const themeStyles = makeStyles((theme: AppTheme) => ({
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    border: `1px solid ${theme.palette.button.green}`,
    color: theme.palette.text.secondary,
    backgroundColor: "rgba(59, 162, 156, 0.3)", // palette.background.green
    "&:hover": {
      backgroundColor: "rgba(59, 162, 156, 0.5)", // palette.background.green
    },
    "&:focus": {
      backgroundColor: "rgba(59, 162, 156, 0.5)", // palette.background.green
    },
  },
}));

export default themeStyles;
