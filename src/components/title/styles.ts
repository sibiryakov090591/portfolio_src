import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import { Theme } from "@material-ui/core/styles/createTheme";

export const useStyles = makeStyles((theme: Theme & AppTheme) => ({
  title: {
    zIndex: 2,
    margin: "50px auto 65px",
    color: theme.palette.text.secondary,
    fontSize: 38,
    fontFamily: "Orbitron",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
        margin: "50px auto 50px",
    },
  },
  index: {
    background: theme.palette.background.green,
    height: 28,
    width: "110%",
    display: "block",
    position: "absolute",
    bottom: 4,
    left: "-5%",
    zIndex: -1,
  },
}));

export default "styles";
