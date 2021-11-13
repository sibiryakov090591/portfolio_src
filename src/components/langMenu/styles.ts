import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import { Theme } from "@material-ui/core/styles/createTheme";

export const useStyles = makeStyles((theme: AppTheme & Theme) => ({
  langBlock: {
    cursor: "pointer",
    padding: 10,
    color: theme.palette.text.secondary,
  },
  langFlag: {
    width: 30,
    [theme.breakpoints.down("sm")]: {
      width: 45,
    },
  },
}));

export default "styles";
