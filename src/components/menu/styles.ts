import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  wrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
  },
  topList: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    height: 60,
    marginRight: 80,
    color: theme.palette.text.secondary,
  },
  topItem: {
    "&:not(:last-child)": {
      marginRight: 40,
    },
  },
  topItemIndex: {
    color: theme.palette.text.green,
    marginRight: 6,
  },
  fixedList: {
    position: "fixed",
    top: "-60px",
    right: 0,
    left: 0,
    transition: "transform 300ms ease",
    transform: "translateY(60px)",
  },
  showList: {
    transform: "translateY(0)",
  },
}));

export default "styles";
