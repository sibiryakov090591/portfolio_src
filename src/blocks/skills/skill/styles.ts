import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  wrapper: {
    display: "inline-flex",
    alignItems: "center",
    border: `3px solid ${theme.palette.skill.border}`,
    borderRadius: 12,
    backgroundColor: theme.palette.skill.background,
    padding: "8px 24px",
    margin: "0 12px",
    height: 45,
  },
  description: {
    marginLeft: 16,
    fontSize: 16,
    fontFamily: "Orbitron",
    whiteSpace: "nowrap",
    color: "#757c8e",
  },
  icon: {
    height: "100%",
  },
}));

export default "styles";
