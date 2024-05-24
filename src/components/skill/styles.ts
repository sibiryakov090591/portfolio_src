import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  wrapper: {
    display: "inline-flex",
    alignItems: "center",
    border: `8px solid ${theme.palette.skill.border}`,
    borderRadius: 12,
    backgroundColor: theme.palette.skill.background,
    padding: "0 24px",
    margin: "0 12px",
    height: 90,
  },
  description: {
    marginLeft: 30,
    fontSize: 22,
    whiteSpace: "nowrap",
    color: theme.palette.text.primary,
  },
  icon: {
    height: "100%",
  },
}));

export default "styles";
