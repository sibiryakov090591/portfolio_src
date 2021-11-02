import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  wrapper: {
    position: "fixed",
    bottom: 0,
    left: 50,
  },
  imgWrapper: {
    width: 25,
    marginTop: 25,
  },
  img: {
    width: "100%",
  },
  line: {
    width: 2,
    height: 60,
    backgroundColor: theme.palette.background.green,
    margin: "10px auto 0",
  },
}));

export default "styles";
