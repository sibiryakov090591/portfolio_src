import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import { Theme } from "@material-ui/core/styles/createTheme";

export const useStyles = makeStyles((theme: Theme & AppTheme) => ({
  title: {
    zIndex: 2,
    margin: "0 auto",
    padding: "50px 0 65px",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0 50px",
    },
  },
  index: {
    color: theme.palette.text.green,
    fontFamily: "Orbitron",
    fontWeight: 400,
  },
}));

export default "styles";
