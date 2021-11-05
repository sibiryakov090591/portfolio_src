import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  title: {
    margin: "0 auto",
    padding: "50px 0 65px",
    color: theme.palette.text.secondary,
  },
  index: {
    color: theme.palette.text.green,
    fontFamily: "Orbitron",
    fontWeight: 400,
  },
}));

export default "styles";
