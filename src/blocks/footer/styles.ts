import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  footer: {
    backgroundColor: theme.palette.background.dark,
    paddingBottom: 50,
  },
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.text.primary,
  },
}));

export default "styles";
