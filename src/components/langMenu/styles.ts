import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import { Theme } from "@material-ui/core/styles/createTheme";

export const useStyles = makeStyles((theme: AppTheme & Theme) => ({
  langBlock: {
    outline: "none",
    cursor: "pointer",
    padding: 10,
    color: theme.palette.text.secondary,
  },
  title: {
    padding: "0 7px 7px 7px",
    color: theme.palette.text.green,
  },
  langFlag: {
    width: 30,
    [theme.breakpoints.down("sm")]: {
      width: 45,
    },
  },
  langFlagItem: {
    width: 20,
  },
  text: {
    marginLeft: 7,
  },
}));

export default "styles";
