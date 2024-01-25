import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  root: {
    height: "100vh",
    background: theme.palette.background.dark,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  preloader: {
    position: "relative",
    "& img": {
      width: 120,
      background: "radial-gradient(#3f3f37 6%, transparent 38%)",
    },
  },
}));

export default "styles";
