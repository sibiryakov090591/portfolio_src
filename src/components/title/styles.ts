import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  title: {
    margin: "50px auto 65px",
    color: theme.palette.text.primary,
  },
  index: {
    color: theme.palette.text.green,
  },
}));

export default "styles";
