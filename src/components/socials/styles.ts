import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  wrapper: {
    zIndex: 1,
    position: "fixed",
    bottom: 0,
    left: 25,
  },
  imgWrapper: {
    width: 30,
    marginTop: 20,
  },
  img: {
    width: "100%",
    filter: "grayscale(1)",
    transition: "all 250ms ease",
    "&:hover": {
      filter: "grayscale(0)",
    },
  },
  line: {
    width: 2,
    height: 60,
    backgroundColor: theme.palette.background.green,
    margin: "10px auto 0",
  },
}));

export default "styles";
